import React, { Fragment, useEffect } from 'react';
import Header from 'components/Header';
import { connect, useSelector, useDispatch, useStore, } from 'react-redux';
import { Helmet } from "react-helmet";
import { getHomeList } from './store/action';

import style from './style.css'
import useStyles from 'isomorphic-style-loader/useStyles'


const Home = (props) => {

    useStyles(style);


    const newsList = useSelector(state => state.home.newsList) //react-redux7+版本 hook 获取state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomeList())
    }, []);


    //server side render css
    // props.staticContext && (props.staticContext.CSS = style._getCss())


    return (
        <Fragment>
            <Header />
            <Helmet>
                <title>SRR-Home</title>
                <meta name='description' content='this is a home Component' />

            </Helmet>
            <div > Hello  </div>
            <button onClick={() => console.log('test')}>点击</button>
            <h5 className='test'>list</h5>
            <ul>
                {Array.isArray(newsList) && newsList.map(news => {
                    return (
                        <li key={news.id}>{news.title}</li>
                    )
                })}
            </ul>
        </Fragment >

    )
}
export default Home