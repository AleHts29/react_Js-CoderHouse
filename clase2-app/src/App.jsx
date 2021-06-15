import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './componets/navbarComponents/Navbar.js'
import Cards from './componets/cardsComponents/Cards'

function App() {
  return (
    <div className ="App" >
      
      <Router>
        <Navbar/>        
        <Cards/>
      </Router>
    </div>

    // <div className ="App" >
    // <Navbar/>
    // <Cards/>
    // </div>
  )
}

export default App

