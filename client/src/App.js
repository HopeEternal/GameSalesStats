import React from 'react';
import Header from './components/Header.js';
import Box from '@material-ui/core/Box';
import Introduction from './components/Introduction.js';
import Table from './components/Table.js';
import Graphs from './components/Graphs.js';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

export default function App() {
    return (
      <div className="App">
        <CssBaseline />
          <Header />
          <Box p="2rem" textAlign="left">
            <Introduction />
            <Graphs/>
            <Table /> 
          </Box>
        <CssBaseline />
      </div>
    );
}