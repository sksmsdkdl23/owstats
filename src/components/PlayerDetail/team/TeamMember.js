import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ teammate, id, color }) => {
    if (id % 2 === 0) {
        return (
            <Link to={`/owstats/players/${teammate.id}/${teammate.name}`} className='col-md-6 teammate'>
                <div style={{float:'left', minWidth: '50px', marginTop: '1em', textAlign: 'left'}}>
                    <p style={{ textDecoration: 'none', color: `${color}`, display: 'inline-block' }}>{teammate.name}</p>
                    <p style={{ textDecoration: 'none', color: 'black' }}>{teammate.role}</p>
                </div>
                <img src={teammate.headshot} alt={teammate.name} width='100px' style={{ float: 'right' }} />
            </Link>
        );
    } else {
        return (
            <Link to={`/owstats/players/${teammate.id}/${teammate.name}`} className='col-md-6 teammate'>
                <img src={teammate.headshot} alt={teammate.name} width='100px' />
                <div style={{float: 'right', minWidth:'50px', marginTop: '1em', textAlign: 'right'}}>
                    <p style={{ textDecoration: 'none', color: `${color}`, display: 'inline-block' }}>{teammate.name}</p>
                    <p style={{ textDecoration: 'none', color: 'black' }}>{teammate.role}</p>
                </div>
            </Link>
        );
    }
}

export default TeamMember;