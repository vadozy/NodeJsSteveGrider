// process.env.UV_THREADPOOL_SIZE = 2; // default 4
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

const doRequest = () => {
    https.request('https://www.google.com', res => {
        res.on('data', () => { });

        res.on('end', () => {
            console.log(Date.now() - start);
        });
    }).end();
};

doRequest();

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${Date.now() - start}`);
    });
}

doHash();
doHash();
doHash();
doHash();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
});
