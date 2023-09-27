import React from 'react'
import {Grid, Card, CardContent, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Productodetaile = ({Products, children}) => {

    const {id, imagen, nombre, descripcion, autor, categoria, precio } = Products



  return (
    
    <Grid item key={id} xl={12} sm={6} md={4} lg={3}>

        <Card className='cardContainer'>


            <Link to="/item/${id}"></Link>
            

            <CardContent>

            <div className='cardImagen'>
                <img src={Products.imagen} className='productImg'/>
            </div>

            <div className='productData'>
                <h3 className='productTitle'>{Products.nombre}</h3>
                <Typography className='productCategory'>{Products.categoria}</Typography>
                <Typography className='productdesAutor'>{Products.autor}</Typography>
                <Typography className='productdescription'>{Products.descripcion}</Typography>
                <h4 className='productsPrecio'> $ {precio.toFixed(2)}</h4>
            </div>

            </CardContent>

        </Card>

    </Grid>
  )
}

export default Productodetaile