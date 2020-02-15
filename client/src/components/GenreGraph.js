import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Bar} from 'react-chartjs-2';

export default class GenreGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        labels: [this.props.gamesales[0].game_name,'RPG','Action','Puzzle','Sports'],
        datasets: [
          {
            label:'Population',
            data:[
              290441,
              239084,
              193080,
              213214, 
              312354
            ],
            backgroundColor: [
              '#CC99FF',
              '#B266FF',
              '#9933FF',
              '#7F00FF',
              '#6600CC',
              '#4C0099',
            ]
          }
        ],
        genres: "test"
        
      }
  }

  getMostCommonGenre() {
    fetch('/api/getMostCommonGenre')
      .then(res => res.text())
      .then(res => this.setState({genres: res}))
      .catch(err => console.log('Fetch error', err))
  }

  componentDidMount() {
    
    this.getMostCommonGenre();

    /*
      1. Iterate over Array of Objects this.props.gamesales
                Sample: this.props.gamesales.map(game => ())
      2. Identify whether the entry in the current index of game.genre is unique.
         a. If unique, add the name to the Genres Object and 1 count to that name    
         b. If not unique, find the name in the Genres Object and add 1 count to that name
    
      3. Iterate over the new Genres Object and sort it by count.

      4. Iterate over labels, and replace each with the corresponding keys for the Genres item in order
         Limiting the loop to a specific number of iterations will limit the length of the graph!

      5. Iterate over datasets/data, and replace each with the corresponding values for the Genres item in order
    
    */
    
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Bar
        data={this.state}
        width={100}
        height={200}
        options={{
          maintainAspectRatio: false,
          title:{
            display: true,
            text: 'Top Genres',
            fontSize: 25
          },
          legend: {
            display: false
          }
        }}
        />
        <p>{this.state.genres}</p>
      </Container>
    )
  }
}
