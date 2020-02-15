import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';


class Graphs extends Component { 

    render() {
        return (
          <AppBar position="relative">
          <Box alignItems="center" p="1rem">
            <SportsEsportsIcon style={{ fontSize: 80 }}/>      
            </Box>
          </AppBar>
        );
    }
}
//            <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary jss12 jss15 mui-fixed MuiPaper-elevation4">


export default Graphs;


