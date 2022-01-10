const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req,res,next) => {
    console.log('In users middleware');
    res.send('<h1>The "Users" Page</h1>')
})

app.use('/',(req,res,next) => {
    console.log('In Slash');
    res.send('<h1>Hello From Express</h1>')
})

const server = http.createServer(app);

server.listen(3000);