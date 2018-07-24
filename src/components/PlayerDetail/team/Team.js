import React from 'react';

import TeamMember from './TeamMember';


const Team = ({ teammates, color, id }) => {
    const teammateComponent = teammates.filter(teammate => {
        return teammate.id !== id;
    }).map((teammate, i) => {
        return (
            <TeamMember teammate={teammate} key={i} id={i} color={color}/>
        );
    });
    return (
        <div className='row'>
            <h1 className='display-4 col-md-12'>Teammates</h1>
            {teammateComponent}
        </div>
    );
}

export default Team;