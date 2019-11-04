import React from 'react';
import {
    renderToString
} from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import routes from 'src/Router.js';
import { Provider } from 'react-redux';
import { getstore } from 'store';

export const render = (req, res) => {

    const store = getstore()

    // const promises = [];
    // const matched = []


    // routes.some(route => {
    //     const match = matchPath(req.path, route);
    //     if (match) {
    //         matched.push(route)
    //     }
    // });
    // //将store传入路由的loadData，路由组件的获取数据的方法就可以获取store，触发dispatch
    // Array.isArray(matched) && matched.forEach(item => {
    //     if (item.loadData) promises.push(item.loadData(store));
    // })

    // Promise.all(promises).then(() => {

    const content = renderToString((
        <Provider store={store}>
            < StaticRouter location={req.path} context={{}}>
                <div>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </div>

            </StaticRouter >
        </Provider>
    ))
    res.send(`
            <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
            <div id="root">${content}</div>
                <script>window.context = {
                    state:${JSON.stringify(store.getState())}
                }</script>
                <script src='/index.js'></script>
            </body>
            </html>
        `)

    // });







}