import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/home/Header'
import Clients from './components/about/Clients'
import Commumity from './components/Commumity/Commumity'
import Pixelgrade from './components/Pixelgrade/Pixelgrade'
import Stats from './components/Stats/Stats'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Header/>
       <Clients/>
       <Commumity/>
       <Pixelgrade/>
       <Stats/>
    </>
  )
}

export default App
