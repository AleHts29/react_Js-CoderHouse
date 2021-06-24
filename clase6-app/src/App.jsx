import React from 'react'
import './App.scss';
import Navbar from './componets/navbarComponents/Navbar.js'
import { NAME_APP } from './utils/const';
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <>
    <Navbar/> 
    <HomeContainer greeting={NAME_APP}/>
    </>
  )
}

export default App

