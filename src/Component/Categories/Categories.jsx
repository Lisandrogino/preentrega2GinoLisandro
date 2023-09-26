import React from 'react'
import './Categories.css'
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks'
import categorias from '../../assets/Mocks/Categorias.json'
import{ Button, Card, CardContent, CircularProgress, Typography} from '@mui/material'

function Categories() {
  
  const {data, loading} = useAonsyncMoxks(categorias)

  if(loading){ return({CircularProgress})} 

  return (
    <div className='container'>

      <div className='categoriesTitle'>
            <Typography> 
               <h2>Categorias</h2>
           </Typography>
      </div>

      { data.map((categorias)=>{

        return(
         
          <Card key={categorias.id} className='cartCategoriasContainer'>

            <CardContent className='categoriasContainer'>

             <div>
                <Typography>{categorias.categoria}</Typography>
             </div>

            </CardContent>  

          </Card>
          
        )
      })}
        
    </div>
  )
}

export default Categories