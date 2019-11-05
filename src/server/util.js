import React from 'react';
import {
    renderToString
} from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import routes from 'src/Router.js';
import { Provider } from 'react-redux';
import { getstore } from 'store';
import StyleContext from 'isomorphic-style-loader/StyleContext';


const css = new Set()
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

export const render = (req, res, context) => {

    const store = getstore()

    const promises = [];
    const matched = []


    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            matched.push(route)
        }
    });
    //将store传入路由的loadData，路由组件的获取数据的方法就可以获取store，触发dispatch
    Array.isArray(matched) && matched.forEach(item => {
        if (item.loadData) {
            let promise = new Promise((resolve, reject) => {
                item.loadData(store).then(resolve).catch(resolve)
            })
            promises.push(promise)
        } else {

        }


    })

    Promise.all(promises).then(() => {
        let context = {}
        const content = renderToString((
            <Provider store={store}>
                < StaticRouter location={req.path} context={context}>
                    <StyleContext.Provider value={{ insertCss }}>
                        <div>
                            {routes.map(route => (
                                <Route {...route} />
                            ))}
                        </div>
                    </StyleContext.Provider>

                </StaticRouter >
            </Provider>
        ))

        // const cssString = context.CSS ? context.CSS : ''


        if (context.action === 'REPLACE') {
            res.redirect(301, context.url)
        }

        if (context.NotFound) {
            res.status(404)
        }

        res.send(`
            <html>
            <head>
                <title>guaniqinghxoa</title>
                <style>${[...css].join('')}</style>
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

    });

}