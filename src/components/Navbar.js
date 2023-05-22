import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Autocomplete,IconButton,Input} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './styles'

const Navbar=({setQuery})=>{
const classes= useStyles()
  return (
    <div className="nav-container">
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Estate properties 
          </Typography>
          
  <div className={classes.search}>
  <div className={classes.searchIcon}>
      <SearchIcon/>
      <Input placeholder='search...' 
    onChange={(e)=>setQuery(e.target.value)}
    classes={{root: classes.inputRoot, input:classes.inputInput}}
    />
  </div>
  </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
export default Navbar