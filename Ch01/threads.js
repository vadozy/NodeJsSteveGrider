process.env.UV_THREADPOOL_SIZE = 2; // default 4
const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, result) => {
    console.log(`1: ${Date.now() - start}`);

    // const ar = [];
    // for (let i of result) {
    //     ar.push(i);
    // }
    // console.log(ar.join(' '));

    // console.log(`1: typeof result: ${typeof result}`);
    // console.log(`1: result instanceof Buffer: ${result instanceof Buffer}`);
    // console.log(`1: result.length: ${result.length}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`2: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`3: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`4: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`5: ${Date.now() - start}`);
});
