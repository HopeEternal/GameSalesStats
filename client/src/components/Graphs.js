import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GenreGraph from './GenreGraph.js'
import PopularityGraph from './PopularityGraph.js'

class Graphs extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <GenreGraph gamesales={this.props.gamesales} />
          </Grid>
          <Grid item xs>
           <PopularityGraph gamesales={this.props.gamesales} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Graphs;
