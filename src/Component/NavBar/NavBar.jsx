import React from 'react'
import {Toolbar, AppBar, Typography, Button} from '@mui/material';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';


function NavBar() {
  return (
    <AppBar>
    <Toolbar className='barContainerContainer'>

      <div className='logoContainer'>
        <Typography className='logoText'>LOGO</Typography>
      </div>

      <div className='menuContainer'>


        <div className='buttonContainer'>
          <Button className='button'sx={{color: "black"}}>Ciencia</Button>
        </div>

        <div className='buttonContainer'>
          <Button className='button'sx={{color: "black"}}>Ciencia Ficcion</Button>
        </div>

        <div className='buttonContainer'>
          <Button className='button' sx={{color: "black"}}>Fantastica</Button>
        </div>

      </div>

      <div className='cartContainer'>
        
          <CartWidget /> 

      </div> 

         
    </Toolbar>
 </AppBar>
  )
}

export default NavBar