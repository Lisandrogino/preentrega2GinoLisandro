import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const {id} = useParams()
  return (
    <div>
        {id};
        ItemDetailContainer
        
        </div>
  )
}

export default ItemDetailContainer
