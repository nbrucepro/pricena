import React from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import HorizontalList from "../horizontalist/horizontalist";
import SearchBar from "../Searchbar/Searchbar";
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }; 
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  return ( 
    <AppBar style={{marginTop:"-0.5%",width:"101%",marginLeft:"-0.5%"}} position="static" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src='../../assets/logo.png' alt="Logo" style={{ height: '64px', width: '192px' }} />
        <SearchBar />
        <div style={{ flexGrow: 1 }} /> 
        <div style={{ display: 'flex' }}>
          <Button color="primary" onClick={handleMenuOpen} startIcon={<LanguageIcon />}>
            عربي
          </Button>
          {/* <CountryDropdown /> */}
          <IconButton color="primary" onClick={handleMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            // anchorEl={anchorEl}
            // keepMounted
            // open={Boolean(anchorEl)}
            // onClose={handleMenuClose}
          // this is footr 
          >
            <MenuItem>
            {/* <MenuItem onClick={handleMenuClose}> */}
              Log in / Sign Up 
            </MenuItem>
          </Menu>
        </div>
        <IconButton color="primary" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* <HorizontalList /> */}
      <div style={{ display: 'none' }}>
        <div>
          <Button href="#" color="inherit"></Button>
          <Button href="#" color="inherit">About</Button>
          <Button href="#" color="inherit">Contact</Button>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
