import React, { Component } from 'react';

import PlayerInfo from './player-info/PlayerInfo';
import HeroBar from './hero-bar/HeroBar';
import OverallStats from './overall-stats/OverallStats';
import Team from './team/Team';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

import ReactLoading from 'react-loading';

const BASE_URL = 'https://api.overwatchleague.com/players/';

class PlayerDetail extends Component {
    constructor() {
        super();
        this.state = {
            player: null,
            stats: null,
            stat_ranks: null,
            teammates: null,
            color: null,
            logoUrl: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchPlayerDetail(id);
        this.fetchStatRanks(id);
        this.fetchTeamInfo(id);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            player: null,
            stats: null,
            stat_ranks: null,
            teammates: null,
            color: null,
            logoUrl: null
        });
        const { id } = newProps.match.params;
        this.fetchPlayerDetail(id);
        this.fetchStatRanks(id);
        this.fetchTeamInfo(id);
    }

    // get overall stats and the player detail
    fetchPlayerDetail(id) {
        fetch(`${BASE_URL}${id}?locale=en-us&expand=stats`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    player: res.data.player,
                    stats: res.data.stats
                })
                if (this.state.player.game.toLowerCase() !== 'overwatch') {
                    this.props.history.push('/owstats');
                }
            });
    }

    // get stat ranks
    fetchStatRanks(id) {
        fetch(`${BASE_URL}${id}?locale=en-us&expand=stat.ranks`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    stat_ranks: res.data.statRanks
                })
            });
    }

    // get team members
    fetchTeamInfo(id) {
        fetch(`${BASE_URL}${id}?locale=en-us&expand=team`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    teammates: res.data.team.data.players,
                    color: res.data.team.data.colors.primary.color,
                    logoUrl: res.data.team.data.logo.main.png
                })
            });
    }

    render() {
        if (this.state.player && this.state.stats && this.state.stat_ranks && this.state.teammates) {
            return (
                <div>
                    <Navbar />
                    <PlayerInfo player={this.state.player} color={this.state.color} logoUrl={this.state.logoUrl} />
                    <div className='container'>
                        <OverallStats overallStats={this.state.stats.all} statRanks={this.state.stat_ranks} />
                        <hr />
                        <HeroBar stats={this.state.stats} color={this.state.color} />
                        <hr />
                        <Team teammates={this.state.teammates} color={this.state.color} id={this.state.player.id} />
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className='loading'>
                    <ReactLoading type='spin' color='#000000' height={'100%'} width={'100%'}/>
                    <h5>Loading</h5>
                </div>
            );
        }
    }
}

export default PlayerDetail;