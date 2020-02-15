import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GenreGraph from './GenreGraph.js'
import PopularityGraph from './PopularityGraph.js'

export default function Graphs() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <GenreGraph />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
           <PopularityGraph />
          </Grid>
        </Grid>
      </Container>
    )
}
