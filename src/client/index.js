import Home from 'container/Home';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from 'src/Router.js';
import { getClientStore } from 'store';
import { Provider } from 'react-redux';

import StyleContext from 'isomorphic-style-loader/StyleContext'
const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss && style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}



const store = getClientStore()
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <StyleContext.Provider value={{ insertCss }}>
                    <div>
                        {routes.map(route => (
                            <Route {...route} />
                        ))}
                    </div>
                </StyleContext.Provider>

            </BrowserRouter>
        </Provider>
    )
}

//服务端渲染用hydrate不是render
ReactDom.hydrate(<App />, document.getElementById('root'))