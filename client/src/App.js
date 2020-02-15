import React, {Component} from 'react';
import Header from './components/Header.js';
import Box from '@material-ui/core/Box';
import Introduction from './components/Introduction.js';
import Table from './components/Table.js';
import Graphs from './components/Graphs.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import gamesales from './gamesales'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CssBaseline />
          <Header />
          <Box p="2rem" textAlign="left">
            <Introduction />
            <Graphs gamesales={gamesales}/>
            <Table gamesales={gamesales}  /> 
          </Box>
        <CssBaseline />
      </div>
    );
  }
}

export default App;
