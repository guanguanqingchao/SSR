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

//http://di-mock.xiaojukeji.com/mock/362/tianji-api/v1/driverIncome/diag/listen-mode
//req.url匹配的是/mock  后面的路径
app.use('/mock', proxy('http://di-mock.xiaojukeji.com', {
    proxyReqPathResolver: function (req) {
        return '/mock' + req.url
    }
}));


app.use(express.static('public')); //res.send中的script是静态资源，将静态资源放到public目录下面
app.get('*', (req, res) => {
    render(req, res)

})
var server = app.listen(3000)