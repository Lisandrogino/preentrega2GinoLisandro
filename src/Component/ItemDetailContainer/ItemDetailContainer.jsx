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
        productoSeleccionado = data.find(item => item.id === parseInt(id))
      }

      if(loading) return <CircularProgress />

  return (
            <div>
                <h1>{productoSeleccionado.nombre}</h1>
                <p>{productoSeleccionado.autor}</p>
                <h2>{productoSeleccionado.descripcion}</h2>
                <p>{productoSeleccionado.precio}</p>

            </div>
  )
}

export default ItemDetailContainer
