import React from 'react';
import {
    Route
} from 'react-router-dom';
import {
    getHomeList
} from 'container/Home/store/action'
import Home from 'container/Home';
import Login from 'container/Login';

export default [{
        path: "/",
        exact: true,
        component: Home,
        key: 'home',
        loadData: (store) => store.dispatch(getHomeList()) //组件渲染之前请求数据
    },
    {
        path: "/login",
        exact: true,
        key: 'login',
        component: Login,
    }
];