import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';


export default function Header() { 
        return (
          <AppBar position="relative">
          <Box alignItems="center" p="1rem">
            <SportsEsportsIcon style={{ fontSize: 80 }}/>      
            </Box>
          </AppBar>
        );
}
