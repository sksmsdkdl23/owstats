import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const HeroBar = ({ stats, color }) => {
    const heroesPlayed = stats.heroes.filter(hero => {
        return hero.stats.time_played_total > 60;
    }).map(hero => ({
        name: hero.name,
        timePlayed: hero.stats.time_played_total
    }));
    heroesPlayed.sort(function(a, b) {
        return b.timePlayed - a.timePlayed;
    });

    if (stats.heroes.length === 0) {
        return (
            <div style={{textAlign: 'center'}}>No Data to display</div>
        );
    } else {
        return (
            <div className='col-md-12'>
                <h1 className='display-4'>HERO COMPARISON BY TIME PLAYED</h1>
                <h6>Only Displaying hero played for over 1 min</h6>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={heroesPlayed}>
                        <XAxis dataKey='name' />
                        <Tooltip formatter={(timePlayed) => Number((timePlayed/3600).toFixed(0)) + 'hrs ' + Math.floor((timePlayed % 3600) / 60) + 'min ' + Number((timePlayed%60).toFixed(0)) + 'sec'}/>
                        <Legend />
                        <Bar dataKey='timePlayed' name='Time Played' fill={`${color}`} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default HeroBar;