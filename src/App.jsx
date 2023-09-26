import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import Banner from './Component/NavBar/Banner/Banner'
import Categories from './Component/Categories/Categories'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Banner/>
     <Categories/>
    </>
  )
}

export default App
