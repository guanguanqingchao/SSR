import React from 'react';
import {
    Route
} from 'react-router-dom';
import {
    getHomeList
} from 'container/Home/store/action'
import Home from 'container/Home';
import Login from 'container/Login';
import NotFound from './container/NotFound';
import RedirectPage from './container/RedirectPage'

export default [

    {
        path: "/",
        exact: true,
        component: Home,
        key: 'home',
        loadData: (store) => store.dispatch(getHomeList()) //组件渲染之前请求数据

    },
    {
        path: "/login",
        key: 'login',
        component: Login,
    },

    {
        path: '/404',
        key: 'notfound',
        component: NotFound
    }, {
        path: '/redirect',
        key: 'redirect',
        component: RedirectPage
    }
];