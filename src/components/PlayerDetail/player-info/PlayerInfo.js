import React from 'react';

import { Link } from 'react-router-dom';

const PlayerInfo = ({ player, color, logoUrl }) => {
    return (
        <div className='row header' style={{ backgroundColor: `${color}`, marginTop:'71px'}}>
            <Link to={`${process.env.PUBLIC_URL}/`} style={{marginTop: '15px', marginLeft: '15px'}}><i className="fas fa-arrow-left" style={{ color: 'black' }}></i></Link>
            <div className='headshot'>
                <img src={player.headshot} alt={`${player.givenName} ${player.familyName}`} />
            </div>

            <div className='playerDetail'>
                <div className='logo'>
                    <img src={logoUrl} width='75px' height='75px' alt='logo' />
                </div>
                <div className='detail'>
                    <p style={{ fontSize: '3em' }}>{player.name}</p>
                    <p>{player.givenName} {player.familyName}</p>
                    <p>{player.attributes.role}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerInfo;