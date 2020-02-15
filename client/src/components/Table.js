import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class StatTable extends Component {
  constructor() {
    super();
    this.state = {
        table: []
      }
  }

  getGamesTable() {
    fetch('/api/getGamesTable')
      .then(res => res.json())
      .then(res => this.setState({table: res}))
      .catch(err => console.log('Fetch error', err))
  }

  componentDidMount() {
    this.getGamesTable();    
  }
  render() {
    return (
      <Container maxWidth="lg">
        <h1>Top 10 Games Worldwide</h1>
        <TableContainer component={Paper} elevation={3}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="right">Game</TableCell>
              <TableCell align="right">Platform</TableCell>
              <TableCell align="right">Year Released</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Publisher</TableCell>
              <TableCell align="right">Global Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.table.map(game => (
              <TableRow key={game.rank_id}>
                <TableCell component="th" scope="row">
                  {game.rank_id}
                </TableCell>
                <TableCell align="right">{game.game_name}</TableCell>
                <TableCell align="right">{game.platform}</TableCell>
                <TableCell align="right">{game.year_released}</TableCell>
                <TableCell align="right">{game.genre}</TableCell>
                <TableCell align="right">{game.publisher}</TableCell>
                <TableCell align="right">{game.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>





      </Container>
    )
  }
}

export default StatTable;
