process.env.UV_THREADPOOL_SIZE = 1; // default 4
const cluster = require('cluster');

//console.log(cluster.isMaster);

if (cluster.isMaster) {
    console.log(`require('os').cpus().length == ${require('os').cpus().length}`);
    // Cause index.js to be executed *again* but in child mode
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express');
    const crypto = require('crypto');
    const app = express();
    
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    });
    
    app.listen(3000);
}
