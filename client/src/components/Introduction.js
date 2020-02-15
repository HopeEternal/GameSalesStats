import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GamerImage from '../gamerfamily.png'

export default function Introduction() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8} md={8}>
            <h1 color="primary">What games sold the best worldwide?</h1>
            <p>Have you ever wondered what the top selling games were? Thanks to Gregory Smith, you can find out! Using a scrape of <a href="vgchartz.com" target="_blank" rel="noopener noreferrer">vgchartz.com</a>, you can check out this selection of data on titles with sales greater than 100,000 copies.</p>
            <p>This dataset includes console and PC games and games from companies as big as Nintendo and as small as Yeti.</p>
            <p>Download the original data set yourself at <a href="https://www.kaggle.com/gregorut/videogamesales" target="_blank" rel="noopener noreferrer">Kaggle.com</a>.</p>
            <p>Thanks to <a href="https://www.vecteezy.com/free-vector/mountain" target="_blank" rel="noopener noreferrer">Mountain Vectors by Vecteezy</a> for providing this beautiful image.</p>
          </Grid>
          <Grid item xs xs={12} sm={4} md={4}>
            <img src={GamerImage} width="100%" alt="A family celebrating over video games" />
          </Grid>
        </Grid>
      </Container>
    )
}
