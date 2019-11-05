import axios from 'axios'


////https://jsonplaceholder.typicode.com/posts

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // timeout: 1000,
    // headers: {
    //     'X-Custom-Header': 'foobar'
    // }
});

export default instance;