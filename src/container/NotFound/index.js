import React, { Fragment, useEffect } from 'react';
import {
    useParams,
    useLocation,
    useHistory
} from "react-router-dom";
import Header from 'components/Header';



const NotFound = (props) => {

    props.staticContext && (props.staticContext.NotFound = true)

    return (
        <Fragment>
            <div > Sorry,pages not found</div>
        </Fragment>

    )
}
export default NotFound