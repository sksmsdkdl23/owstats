import React from 'react';

const LeaderBoardHeader = ({ header }) => {
    return (
        <div className="card-header">
            <b>{header}</b><span className='leader-chart'><b>Avg Per 10 Min.</b></span>
        </div>
    );
}

export default LeaderBoardHeader;