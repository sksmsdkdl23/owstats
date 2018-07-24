import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: 'orange', position: 'fixed', top: '0', width: '100%', zIndex: '1'}}>
            <div className='container'>
                <Link to='/owstats' style={{ textDecoration: 'none', color: '#333', fontSize: '30px'}}>
                    <img
                        src='http://orig02.deviantart.net/1e9b/f/2016/318/e/2/mercy_league_by_winterlizard-daoenkq.png'
                        alt='logo'
                        width='100px'
                        style={{ marginRight: '30px'}}
                    />
                    OWStats
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;