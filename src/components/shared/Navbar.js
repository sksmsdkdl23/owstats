import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className='container'>
                <Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none', color: '#333', fontSize: '30px'}}>
                    <img
                        src='http://orig02.deviantart.net/1e9b/f/2016/318/e/2/mercy_league_by_winterlizard-daoenkq.png'
                        alt='logo'
                        width='100px'
                        style={{ marginRight: '10px'}}
                    />
                    OWStats
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;