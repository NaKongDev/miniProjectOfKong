import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Clients from './components/Clients/Clients'
import Commumity from './components/Commumity/Commumity'
import Pixelgrade from './components/Pixelgrade/Pixelgrade'
import Stats from './components/Stats/Stats'
import How from './components/How/How'
import Meet from './components/Meet/Meet'
import Article from './components/Article/Article'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'

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
       <How/>
       <Meet/>
       <Article/>
       <Demo/>
       <Footer/>
    </>
  )
}

export default App
