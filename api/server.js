const express = require('express')
const port = 5000;
const server = express();

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;


/* const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port,console.log('server runnig 3000')); */