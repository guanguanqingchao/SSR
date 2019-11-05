import axios from 'axios'


import {
    CHANGE_HOME_LIST
} from './constant';


const changeList = (data) => ({
    type: CHANGE_HOME_LIST,
    data
})


export const getHomeList = () => {
    //https://jsonplaceholder.typicode.com/posts
    //浏览器  mock……     ==》   localhost:3000/mock……
    //服务器  mock……     ==》    服务器根目录[SSR]/mock    找不到
    return (dispatch, getState, axiosInstance) => {
        //return Promise
        return axiosInstance.get('/posts').then((res) => {
            dispatch(changeList(res.data))
        })
    }
}