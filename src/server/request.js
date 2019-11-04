import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://di-mock.xiaojukeji.com/',
    // timeout: 1000,
    // headers: {
    //     'X-Custom-Header': 'foobar'
    // }
});

export default instance;