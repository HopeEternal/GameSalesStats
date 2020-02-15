import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GenreGraph from './GenreGraph.js'
import PopularityGraph from './PopularityGraph.js'

export default function Graphs(props) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <GenreGraph gamesales={props.gamesales} />
          </Grid>
          <Grid item xs>
           <PopularityGraph gamesales={props.gamesales} />
          </Grid>
        </Grid>
      </Container>
    )
}
