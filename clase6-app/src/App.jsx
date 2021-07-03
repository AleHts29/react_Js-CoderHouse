import React from 'react'
import {useEffect, useState} from 'react'

import './App.css';
import {getData} from './utils/const'
import Navbar from './componets/navbarComponents/Navbar'
import { NAME_APP } from './utils/const';
import HomeContainer from './containers/HomeContainer'




function App() {
let [productos, setPreductos] = useState([]);

  // async function getData (){
  //   // Traigo la data de MLA
  //   const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=apple");
  //   const data = await response.json();
  //   return data.results;
  // }

// Actualizo los estados
useEffect(() => {
  const waitForData = async () => {
    let data =  await getData('music');
    let aux = data.map(element => {
    return{
      title: element.title,
      img: element.thumbnail,
      price: element.price,
      id: element.id,
      stock: element.available_quantity
    }
  })
  setPreductos(aux);
    // console.log(data);
  }
  console.log("antes de waitForData");
  waitForData();
  console.log("despues del waitForData");
}, [])

if (productos.length > 0){
  console.log(productos);
}


  return (
    <>
    
    <Navbar count={2}/> 
    {/* <HomeContainer  greeting={NAME_APP}/> */}

{productos.length != 0 ? 'Ya cargue' : 'Estoy cargando la data'  }
     <div className="container">
        <div className="row border">
        {productos.map(element => {
          return(
              <div className="col-12 mb-3 col-md-4 border">
                <div className = "card bg-dark  mt-5">
                  <img src={element.img} alt="" className="tamanoImg"/>
                  <div className = "card-body text-center">
                    <h5 className = "card-title text-info"> {element.title}</h5>
                    <strong className="text-warning">Price: $ {element.price}</strong>
                  </div>
                </div>
              </div>  
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App

