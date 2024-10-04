import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gameskiller
        </Typography>
        <Button color="inherit">Dropdown</Button>
        <Button color="inherit">Cleor Webseite</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
