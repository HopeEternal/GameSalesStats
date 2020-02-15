import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {Bar} from 'react-chartjs-2';

export default class GenreGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        labels: [],
        datasets: [
          {
            label:'Population',
            data:[
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
        genres: []
      }
  }

  getMostCommonGenre() {
    fetch('/api/getMostCommonGenre')
      .then(res => res.json())
      .then(res => 
        {
          this.setState({genres: res});
          let dataCont = [...this.state.datasets];
          let dataPool = {...dataCont[0]};

          this.state.genres.map(genrePop => {
            this.setState({labels: [...this.state.labels, genrePop.genre]});
            
            dataPool.data = [...dataPool.data, parseInt(genrePop.count)];
            dataCont[0] = dataPool;
            this.setState({datasets: dataCont});
          })
        }
      )
      .catch(err => console.log('Fetch error', err)) 
  }

  componentDidMount() {
    this.getMostCommonGenre();
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Bar
        data={this.state}
        width={100}
        height={300}
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
      </Container>
    )
  }
}
