import React from 'react'
import { useParams } from 'react-router-dom'
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks';
import Products from '../../assets/Mocks/Products.json'
import { CircularProgress } from '@mui/material';
import Productodetaile from '../Productos/Productodetaile';


const CategoryProductList = () => {

    const {categoriesID} = useParams();
    const {data, loading} = useAonsyncMoxks(Products)

    if(loading) return <CircularProgress/>

    const categorySelected = data.filter( categories => categories.categoria.toLowerCase() === categoriesID.toLocaleLowerCase())
    
  return (

    <div>
        <Grid container spacing={3}>
            {categorySelected.map((Products)=>{
                return <Productodetaile key={Products.id} Products={Products} />
            })}
        </Grid>
    </div>
   
  )
}

export default CategoryProductList