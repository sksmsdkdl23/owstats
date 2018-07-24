import React from 'react';

import { Link } from 'react-router-dom';

const PlayerInfo = ({ player, color, logoUrl }) => {
    return (
        <div className='row header' style={{ backgroundColor: `${color}`, marginTop:'71px'}}>
            <Link to='/owstats' style={{ textDecoration: 'none', float: 'left', marginTop: '15px', marginLeft: '15px' }}><i className="fas fa-arrow-left" style={{ color: 'black' }}></i></Link>
            <div className='headshot col-xs-6'>
                <img src={player.headshot} alt={`${player.givenName} ${player.familyName}`} />
            </div>

            <div className='playerDetail col-xs-6'>
                <div className='logo row'>
                    <img src={logoUrl} width='75px' height='75px' alt='logo' />
                </div>
                <div style={{ float: 'left', marginTop: '12.5%'}} className='detail'>
                    <p style={{ fontSize: '3em' }}>{player.name}</p>
                    <p>{player.givenName} {player.familyName}</p>
                    <p>{player.attributes.role}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerInfo;