import React from 'react';

const OverallStats = ({ overallStats, statRanks }) => {
    return (
        <div className='col-md-12' style={{marginTop: '30px'}}>
            <h1 className='display-4'>Overall Stats</h1>Regular Season
            <table className='table table-bordered table-hover'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>As All Heroes</th>
                        <th scope='col'>Avg per 10 min</th>
                        <th scope='col'>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Eliminations</td>
                        <td>{Number((overallStats.eliminations_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.eliminations_avg_per_10m ? statRanks.eliminations_avg_per_10m : '- -'}</td>
                    </tr>
                    <tr>
                        <td>Deaths</td>
                        <td>{Number((overallStats.deaths_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.deaths_avg_per_10m ? statRanks.deaths_avg_per_10m : '- -'}</td>
                    </tr>
                    <tr>
                        <td>Damage</td>
                        <td>{Number((overallStats.hero_damage_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.hero_damage_avg_per_10m ? statRanks.hero_damage_avg_per_10m : '- -'}</td>
                    </tr>
                    <tr>
                        <td>Healing</td>
                        <td>{Number((overallStats.healing_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.healing_avg_per_10m ? statRanks.healing_avg_per_10m : '- -'}</td>
                    </tr>
                    <tr>
                        <td>Ults Earned</td>
                        <td>{Number((overallStats.ultimates_earned_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.ultimates_earned_avg_per_10m ? statRanks.ultimates_earned_avg_per_10m : '- -'}</td>
                    </tr>
                    <tr>
                        <td>Final Blows</td>
                        <td>{Number((overallStats.final_blows_avg_per_10m).toFixed(2))}</td>
                        <td>{statRanks.final_blows_avg_per_10m ? statRanks.final_blows_avg_per_10m : '- -'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OverallStats;