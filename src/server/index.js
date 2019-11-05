import express from 'express';
import React from 'react';
import proxy from 'express-http-proxy';
import {
    StaticRouter
} from 'react-router-dom';

import Home from 'container/Home';
import {
    render
} from './util';
const app = express();

//https://jsonplaceholder.typicode.com/posts
//req.url匹配的是/mock  后面的路径
app.use('/posts', proxy('https://jsonplaceholder.typicode.com/', {

    proxyReqPathResolver: function (req) {
        return '/posts'
    }
}));


app.use(express.static('public')); //res.send中的script是静态资源，将静态资源放到public目录下面
app.get('*', (req, res) => {
    render(req, res)

})
var server = app.listen(3000)