import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import {Line} from 'react-chartjs-2';

export default class PopularityGraph extends Component {
  constructor() {
    super();
    this.state = {
        labels: [],
        datasets: [
          {
            label: "Popularity of RPG's Over-Time",
            data:[
            ],
            backgroundColor: [
              '#6b2f98'
            ]
          }
        ],
        popularity: []
      }
  }

  getPopularityOfRPGs() {
    fetch('/api/getRPGPopularity')
      .then(res => res.json())
      .then(res => 
        {
          this.setState({popularity: res});
          let dataCont = [...this.state.datasets];
          let dataPool = {...dataCont[0]};

          this.state.popularity.map(pop => {
            this.setState({labels: [...this.state.labels, pop.year_released]});
            
            dataPool.data = [...dataPool.data, parseInt(pop.sum)];
            dataCont[0] = dataPool;
            this.setState({datasets: dataCont});
          })
        }
      )
      .catch(err => console.log('Fetch error', err))
      
  }

  componentDidMount() {
    this.getPopularityOfRPGs();
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Line
        data={this.state}
        width={100}
        height={300}
        options={{
          maintainAspectRatio: false,
          title:{
            display: true,
            text: "Popularity of RPG's Over-Time",
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
