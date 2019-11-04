import React, { Fragment, useEffect } from 'react';
import Header from 'components/Header';
import { connect, useSelector, useDispatch, useStore, } from 'react-redux';
import { getHomeList } from './store/action';

const Home = () => {
    const newsList = useSelector(state => state.home.newsList) //react-redux7+版本 hook 获取state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomeList())
    }, []);

    return (
        <Fragment>
            <Header />
            <div > Hello  </div>
            <button onClick={() => console.log('test')}>点击</button>
            <h5>list</h5>
            <ul>
                {Array.isArray(newsList) && newsList.map(news => {
                    return (
                        <li key={news.start}>{news.start}</li>
                    )
                })}
            </ul>
        </Fragment >

    )
}
export default Home