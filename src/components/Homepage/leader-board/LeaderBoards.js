import React from 'react';
import LeaderBoard from './LeaderBoard';

const LeaderBoards = ({ topHealers, topDamageDealers, topEliminators }) => {
    return (
        <div className='row'>
            <LeaderBoard players={topHealers} header='Top Healers' />
            <LeaderBoard players={topDamageDealers} header='Top Damage Dealers' />
            <LeaderBoard players={topEliminators} header='Top Eliminators' />
        </div>
    );
}

export default LeaderBoards;