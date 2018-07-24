import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Page404 extends Component {
    render() {
        return (
            <div className='notFound'>
                <div>Page Not Found</div>
                <Link to={`${process.env.PUBLIC_URL}/`}><button type='button' className='btn btn-danger'>Go Home</button></Link>
            </div>
        );
    }
}

export default Page404;