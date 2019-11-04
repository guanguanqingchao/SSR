/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _action = __webpack_require__(/*! container/Home/store/action */ \"./src/container/Home/store/action.js\");\n\nvar _Home = __webpack_require__(/*! container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! container/Login */ \"./src/container/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n    path: \"/\",\n    exact: true,\n    component: _Home2.default,\n    key: 'home',\n    loadData: function loadData(store) {\n        return store.dispatch((0, _action.getHomeList)());\n    } //组件渲染之前请求数据\n}, {\n    path: \"/login\",\n    exact: true,\n    key: 'login',\n    component: _Login2.default\n}];\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'HOME'\n        ),\n        ' \\xA0\\xA0',\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'Login'\n        )\n    );\n};\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _action = __webpack_require__(/*! ./store/action */ \"./src/container/Home/store/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    var newsList = (0, _reactRedux.useSelector)(function (state) {\n        return state.home.newsList;\n    }); //react-redux7+版本 hook 获取state\n    var dispatch = (0, _reactRedux.useDispatch)();\n\n    (0, _react.useEffect)(function () {\n        dispatch((0, _action.getHomeList)());\n    }, []);\n\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Hello  '\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return console.log('test');\n                } },\n            '\\u70B9\\u51FB'\n        ),\n        _react2.default.createElement(\n            'h5',\n            null,\n            'list'\n        ),\n        _react2.default.createElement(\n            'ul',\n            null,\n            Array.isArray(newsList) && newsList.map(function (news) {\n                return _react2.default.createElement(\n                    'li',\n                    { key: news.start },\n                    news.start\n                );\n            })\n        )\n    );\n};\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/action.js":
/*!********************************************!*\
  !*** ./src/container/Home/store/action.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHomeList = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constant = __webpack_require__(/*! ./constant */ \"./src/container/Home/store/constant.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeList = function changeList(data) {\n    return {\n        type: _constant.CHANGE_HOME_LIST,\n        data: data\n    };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n    //https://jsonplaceholder.typicode.com/posts\n    //http://di-mock.xiaojukeji.com/mock/362/tianji-api/v1/driverIncome/diag/listen-mode'\n    //浏览器  mock……     ==》   localhost:3000/mock……\n    //服务器  mock……     ==》    服务器根目录[SSR]/mock    找不到\n    return function (dispatch) {\n        return _axios2.default.get('/mock/362/tianji-api/v1/driverIncome/diag/listen-mode').then(function (res) {\n            dispatch(changeList(res.data.data.online_timeline.detail));\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/action.js?");

/***/ }),

/***/ "./src/container/Home/store/constant.js":
/*!**********************************************!*\
  !*** ./src/container/Home/store/constant.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_HOME_LIST = exports.CHANGE_HOME_LIST = \"CHANGE_HOME_LIST\";\n\n//# sourceURL=webpack:///./src/container/Home/store/constant.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constant = __webpack_require__(/*! ./constant */ \"./src/container/Home/store/constant.js\");\n\nvar defaultState = {\n    name: 'Home name',\n    newsList: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constant.CHANGE_HOME_LIST:\n            return _extends({}, state, { newsList: action.data\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/container/Login/index.js":
/*!**************************************!*\
  !*** ./src/container/Login/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Login'\n        )\n    );\n};\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/container/Login/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _util = __webpack_require__(/*! ./util */ \"./src/server/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\n//http://di-mock.xiaojukeji.com/mock/362/tianji-api/v1/driverIncome/diag/listen-mode\n//req.url匹配的是/mock  后面的路径\napp.use('/mock', (0, _expressHttpProxy2.default)('http://di-mock.xiaojukeji.com', {\n    proxyReqPathResolver: function proxyReqPathResolver(req) {\n        console.log('==========', req.url);\n\n        return '/mock' + req.url;\n    }\n}));\n\napp.use(_express2.default.static('public')); //res.send中的script是静态资源，将静态资源放到public目录下面\napp.get('*', function (req, res) {\n    (0, _util.render)(req, res);\n});\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/util.js":
/*!****************************!*\
  !*** ./src/server/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Router = __webpack_require__(/*! src/Router.js */ \"./src/Router.js\");\n\nvar _Router2 = _interopRequireDefault(_Router);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! store */ \"./src/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, res) {\n\n    var store = (0, _store.getstore)();\n\n    // const promises = [];\n    // const matched = []\n\n\n    // routes.some(route => {\n    //     const match = matchPath(req.path, route);\n    //     if (match) {\n    //         matched.push(route)\n    //     }\n    // });\n    // //将store传入路由的loadData，路由组件的获取数据的方法就可以获取store，触发dispatch\n    // Array.isArray(matched) && matched.forEach(item => {\n    //     if (item.loadData) promises.push(item.loadData(store));\n    // })\n\n    // Promise.all(promises).then(() => {\n\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: {} },\n            _react2.default.createElement(\n                'div',\n                null,\n                _Router2.default.map(function (route) {\n                    return _react2.default.createElement(_reactRouterDom.Route, route);\n                })\n            )\n        )\n    ));\n    res.send('\\n            <html>\\n            <head>\\n                <title>SSR</title>\\n            </head>\\n            <body>\\n            <div id=\"root\">' + content + '</div>\\n                <script>window.context = {\\n                    state:' + JSON.stringify(store.getState()) + '\\n                }</script>\\n                <script src=\\'/index.js\\'></script>\\n            </body>\\n            </html>\\n        ');\n\n    // });\n\n};\n\n//# sourceURL=webpack:///./src/server/util.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getstore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! container/Home/store */ \"./src/container/Home/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n    home: _store.reducer\n});\n\nvar getstore = exports.getstore = function getstore() {\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    var defaultState = window.context.state;\n    return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });