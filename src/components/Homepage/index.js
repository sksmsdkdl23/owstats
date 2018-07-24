import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar';
import PlayerList from './player-list/PlayerList';
import LeaderBoards from './leader-board/LeaderBoards';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

import ReactLoading from 'react-loading';

const API_URL = 'https://api.overwatchleague.com/stats/players?stage_id=postseason';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      players: null,
      searchTerm: ''
    }
  }

  componentDidMount() {
    // Fetch all the players
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          players: data.data
        })
      });
  }

  onSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    // Filter players based on search
    if (this.state.players) {
      const filteredPlayers = this.state.players.filter(players => {
        return players.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      });

      const topHealers = [...this.state.players];
      topHealers.sort(function (player1, player2) {
        return player2.healing_avg_per_10m - player1.healing_avg_per_10m;
      });

      const topDamageDealers = [...this.state.players];
      topDamageDealers.sort(function (player1, player2) {
        return player2.hero_damage_avg_per_10m - player1.hero_damage_avg_per_10m;
      });

      const topEliminators = [...this.state.players];
      topEliminators.sort(function (player1, player2) {
        return player2.eliminations_avg_per_10m - player1.eliminations_avg_per_10m;
      });

      return (
        <div>
          <Navbar />
          <div className='container'>
            <h1 className='display-4' style={{ marginTop: '100px' }}>Leader Boards</h1>Post Season
            <LeaderBoards topHealers={topHealers} topDamageDealers={topDamageDealers} topEliminators={topEliminators} />
            <hr />
            <h1 className='display-4'>Player Stats</h1>
            <SearchBar searchChange={this.onSearchChange} />
            <h6>All stats are avg. per 10 minutes unless specified</h6>
            <PlayerList players={filteredPlayers} />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className='loading'>
          <ReactLoading type='spin' color='#000000' height={'100%'} width={'100%'} />
          <h5>Loading</h5>
        </div>
      );
    }
  }
}

export default HomePage;