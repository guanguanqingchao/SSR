import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import header from './header.css';
import useStyles from 'isomorphic-style-loader/useStyles'


const Header = () => {
    useStyles(header)
    return (
        <Fragment>
            <Link to='/' >HOME</Link> &nbsp;&nbsp;
            <Link to="/login">Login</Link>
            <div className="test1">样式测试</div>

        </Fragment>

    )
}
export default Header