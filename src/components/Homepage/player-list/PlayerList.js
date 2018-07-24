import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactTable from "react-table";
import 'react-table/react-table.css'

class PlayerList extends Component {
    render() {
        return (
            <div>
                <ReactTable
                    pageSizeOptions={[5, 10, 20, 25, this.props.players.length]}
                    data={this.props.players}
                    columns={[
                        {
                            Header: 'Role',
                            accessor: 'role',
                            resizable: false
                        },
                        {
                            id: 'name',
                            Header: 'Name',
                            accessor: d => <Link to={`/owstats/players/${d.playerId}/${d.name}`} style={{ textDecoration: 'none', color: 'orange'}}>{d.name}</Link>,
                            resizable: false
                        },
                        {
                            Header: 'Team',
                            accessor: 'team',
                            resizable: false
                        },
                        {
                            id: 'eliminations_avg_per_10m',
                            Header: 'ELIM',
                            accessor: d => Number((d.eliminations_avg_per_10m).toFixed(2)),
                            resizable: false
                        },
                        {
                            id: 'deaths_avg_per_10m',
                            Header: 'Death',
                            accessor: d => Number((d.deaths_avg_per_10m).toFixed(2)),
                            resizable: false
                        },
                        {
                            id: 'hero_damage_avg_per_10m',
                            Header: 'Damage',
                            accessor: d => Number((d.hero_damage_avg_per_10m).toFixed(2)),
                            resizable: false
                        },
                        {
                            id: 'healing_avg_per_10m',
                            Header: 'Healing',
                            accessor: d => Number((d.healing_avg_per_10m).toFixed(2)),
                            resizable: false
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    />
            </div>
        );

    }
}

export default PlayerList;