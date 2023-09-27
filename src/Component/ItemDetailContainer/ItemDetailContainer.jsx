import React from 'react'
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks'
import Products from '../../assets/Mocks/Products.json'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'



const ItemDetailContainer = () => {

      const {data, loading} = useAonsyncMoxks(Products)
      const {id} = useParams()

      let productoSeleccionado = {}

      if(data){
        productoSeleccionado = data.find(item => item.id === pareseInt(id))
      }

      if(loading) return <CircularProgress />

  return (
            <div>
          <h1>{productoSeleccionado.nombre}</h1>
        </div>
  )
}

export default ItemDetailContainer
