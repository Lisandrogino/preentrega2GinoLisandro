import React from 'react'
import {Toolbar, AppBar, Typography, Button} from '@mui/material';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <AppBar>
    <Toolbar className='barContainerContainer'>

      <div className='logoContainer'>
      <Link to="/">LOGO LIBRERIA FRIKI</Link>
      </div>

      <div className='menuContainer'>


        <div className='buttonContainer'>
        <Link to="/categories/ciencia">Ciencia</Link>
        </div>

        <div className='buttonContainer'>
        <Link to="/categories/ciencia-ficcion">Ciencia Ficción</Link>
        </div>

        <div className='buttonContainer'>
       
        <Link to="/categories/fantasia">Fantasía</Link>
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