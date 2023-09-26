import React from 'react'
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks'
import Products from '../../assets/Mocks/Products.json'
import { Grid, Typography, CircularProgress, Grid } from '@mui/material'
import Productodetaile from './Productodetaile'

const ProductList = () => {

    const {data, loading} = useAonsyncMoxks(Products)

    if(loading) return <CircularProgress/>

  return (
    
    <div>
        <Typography className='productsTitle'>
            Productos
        </Typography>

        <div className='cardContainerContainer'>

            <Grid container spacing={2} className='gridContainer'>
                {
                    data.map(Products)=>{
                        
                        return(
                            
                            <Productodetaile key={Products.id}>

                            </Productodetaile>
                        )

                    }
                }
            </Grid>
        </div>
    </div>
    
  )
}

export default ProductList