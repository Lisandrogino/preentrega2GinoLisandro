import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import Banner from './Component/NavBar/Banner/Banner'
import Categories from './Component/Categories/Categories'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductList from './Component/Productos/ProductList'
import CategoryProductList from './Component/Categories/CategoryProductList'
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Banner/>
    
     <Router>
          <NavBar/>
      <Routes>
          <Route exact path='/' element={<ProductList/>} />
          <Route exact path='/Products' element={<ProductList/>} />
          <Route exact path='/categories/:categoriesID' element={<CategoryProductList/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>    

     </Router>
    </>
  )
}

export default App
