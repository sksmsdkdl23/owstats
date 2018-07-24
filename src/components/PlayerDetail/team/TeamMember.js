import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ teammate, id, color }) => {
    if (id % 2 === 0) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/players/${teammate.id}/${teammate.name}`} className='col-md-6 teammate'>
                <div className='teammate-item' style={{float:'left', textAlign: 'left'}}>
                    <p className='teammate-name' style={{color: `${color}`}}>{teammate.name}</p>
                    <p className='role'>{teammate.role}</p>
                </div>
                <img src={teammate.headshot} alt={teammate.name} width='100px' style={{ float: 'right' }} />
            </Link>
        );
    } else {
        return (
            <Link to={`${process.env.PUBLIC_URL}/players/${teammate.id}/${teammate.name}`} className='col-md-6 teammate'>
                <img src={teammate.headshot} alt={teammate.name} width='100px' />
                <div className='teammate-item' style={{float: 'right', textAlign: 'right'}}>
                    <p className='teammate-name' style={{ color: `${color}` }}>{teammate.name}</p>
                    <p className='role'>{teammate.role}</p>
                </div>
            </Link>
        );
    }
}

export default TeamMember;