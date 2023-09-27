import React from 'react'
import {Toolbar, AppBar, CircularProgress } from '@mui/material';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks';
import Categorias from '../../assets/Mocks/Categorias.json';



function NavBar() {

  const {data, loading} = useAonsyncMoxks(Categorias)

  if(loading) return <CircularProgress />

  return (
    <AppBar>
    <Toolbar className='barContainerContainer'>

      <div className='logoContainer'>
      <Link to="/">LOGO LIBRERIA FRIKI</Link>
      </div>
      
      {
        data.map((category)=>{
          return 

          <Link to ="/categories/${category.categoria}">{category.categorias}</Link>
        })
      }

      <div className='cartContainer'>
        
          <CartWidget /> 

      </div> 

         
    </Toolbar>
 </AppBar>
  )
}

export default NavBar