import React from 'react'
import './Categories.css'
import useAonsyncMoxks from '../../Hockss/useAonsyncMocks'
import products from '../../assets/Mocks/Products.json'
import{ Button, Card, CardContent, CircularProgress, Typography} from '@mui/material'

function Categories() {
  
  const {data, loading} = useAonsyncMoxks(products)

  if(loading)
    return <CircularProgress/>
  

  return (
    <div className='container'>
      <Typography>
        Categorias
      </Typography>

      { data.map((products)=>{

        return(
           /*
          <Card key={products.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image= {products.imagen}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {products.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {products.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
          */


         
          <Card key={products.id} className='cardContainerContainer'>

            <CardContent className='cardContainer'>

             <div className='cardImagen'>
             <img src={products.imagen}></img>
             </div>

             <div className='cardDescription'>
             <Typography className='productsElement'>{products.categoria} </Typography>
             <Typography className='productsElement'>{products.nombre}</Typography>
             <Typography className='productsElement'>{products.descripcion}</Typography>
             <Typography className='productsElement'>{products.precio}</Typography>
             </div>

             <div className='buttonContainer'>
              <Button className='buttonAgregarCarrito'>Agregar Carrito</Button>
             </div>

            </CardContent>  

          </Card>
          
        )
      })}
        
    </div>
  )
}

export default Categories