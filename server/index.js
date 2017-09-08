const express = require('express');

const app = express();

const fs = require('fs');

const server = app.use('/', (req, resp) => {
    const file = fs.readFileSync('index.html');
    resp.write(file);
    resp.end();
});

server.listen('8080');