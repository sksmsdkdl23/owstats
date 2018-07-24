import React from 'react';
import LeaderBoardHeader from './LeaderBoardHeader';

const LeaderBoard = ({ players, header }) => {
    if (header === 'Top Healers') {
        return (
            <div className='card col-md' style={{ margin: '10px' }}>
                <LeaderBoardHeader header={header} />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <i className="fas fa-crown" style={{ color: 'gold' }}></i>{players[0].name}
                        <span className='leader-chart'>{Number((players[0].healing_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                        {players[1].name}
                        <span className='leader-chart'>{Number((players[1].healing_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                    {players[2].name}
                    <span className='leader-chart'>{Number((players[2].healing_avg_per_10m).toFixed(2))}</span></li>
                </ul>
            </div>
        );
    } else if (header === 'Top Damage Dealers') {
        return (
            <div className='card col-md' style={{ margin: '10px' }}>
                <LeaderBoardHeader header={header} />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <i className="fas fa-crown" style={{ color: 'gold' }}></i>{players[0].name}
                        <span className='leader-chart'>{Number((players[0].hero_damage_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                        {players[1].name}
                        <span className='leader-chart'>{Number((players[1].hero_damage_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                    {players[2].name}
                    <span className='leader-chart'>{Number((players[2].hero_damage_avg_per_10m).toFixed(2))}</span></li>
                </ul>
            </div>
        );
    } else if (header === 'Top Eliminators') {
        return (
            <div className='card col-md' style={{ margin: '10px' }}>
                <LeaderBoardHeader header={header} />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <i className="fas fa-crown" style={{ color: 'gold' }}></i>{players[0].name}
                        <span className='leader-chart'>{Number((players[0].eliminations_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                        {players[1].name}
                        <span className='leader-chart'>{Number((players[1].eliminations_avg_per_10m).toFixed(2))}</span>
                    </li>
                    <li className='list-group-item'>
                    {players[2].name}
                    <span className='leader-chart'>{Number((players[2].eliminations_avg_per_10m).toFixed(2))}</span></li>
                </ul>
            </div>
        );
    }
    
}

export default LeaderBoard;