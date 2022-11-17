import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <AppBar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
              <Link style={{textDecoration:"none", color:"#ffffff"}} to={"/"}>Dashboard</Link>
            
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
              <Link style={{textDecoration:"none", color:"#ffffff", marginLeft:"30px"}} to={"/add-data"}>Add Data</Link>
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
