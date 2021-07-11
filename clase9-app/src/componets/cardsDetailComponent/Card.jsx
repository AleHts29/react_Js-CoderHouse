import React from 'react';
import img1 from './assets/iphone12.jpeg';
import './styls.css'
import {ButtonComponent} from '../ButtonComponent'
import {ItemCountComponent} from '../buttonCountComponent/ItemCount'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'




const CardDetailComponent = ({productData, children}) => {

    const [loaded, setLoaded] = useState(false);


    function onAdd(){
        setLoaded(true);
    }

    return (
    <>
    
        <div className="d-flex">
            <div className = "col-12 mb-3 col-md-4 bg-white ">    
                <img src={productData.img} alt="" className="tamanoImg"/>
            </div>  
            <div className="col-12 mb-3 col-md-8 bg-dark">
                <div className = "card-body  text-center">
                    <h5 className = "card-title text-white"> {productData.title}</h5>
                    <div><strong className="text-warning">Price: $ {productData.price}</strong></div>                    
                </div>
                <div className="m-3 text-center">
                    {/* {children} */}
                    {!loaded ?(
                      <div>
                        <ItemCountComponent productData={productData} onAdd={onAdd} text={'Agregar al Carrito'}/>
                      </div>
                    ) : (
                        <div className="m-3">
                        <Link to={'/'}>
                         <ButtonComponent text={'Seguir Comprando!!'}/> 
                        </Link>
                        <Link to={'/detail'}>
                         <ButtonComponent text={'Finalizar Compra!'}/> 
                        </Link>
                       
                      </div> 
                    
                    )}
                </div>
            </div>
        </div>
    
    </>
    )
}

export default CardDetailComponent


