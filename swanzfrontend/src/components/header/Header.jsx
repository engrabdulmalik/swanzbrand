import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import Button from './Button';
import logo from '../../assets/images/logo.png'


const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", width: "100vw", maxWidth: "100%" }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box
            component="img"
            src={logo}
            alt="My Logo"
            sx={{
              maxWidth: "70px", // Adjust as needed
              maxHeight: "70px", // Adjust as needed
              display: "block",
              margin: "auto",
              zIndex: 1,
              width: "auto", // Auto width keeps aspect ratio
              height: "auto", // Auto height keeps aspect ratio
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", flex: 10 }}>
            <Nav />
          </Box>
          <Box>
            <Button />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
