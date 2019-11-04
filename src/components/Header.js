import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
            <Link to='/'>HOME</Link> &nbsp;&nbsp;
            <Link to="/login">Login</Link>

        </Fragment>

    )
}
export default Header