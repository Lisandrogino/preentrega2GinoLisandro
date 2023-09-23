import { useState } from 'react'
import './App.css'
import navBar from './Component/NavBar/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <navBar/>
    </>
  )
}

export default App
