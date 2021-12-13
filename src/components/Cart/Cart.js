import React from "react";
import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import { NavLink } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const {cart, clear, removeItem, cartDetail} = useContext(CartContext);
    console.log(cart)
    return (
        <div> {cartDetail().quantityProducts > 0 ? 
            // Carrito con productos   
                <div className="itemsCartContainer">
                    {
                    cart.map((item) =>(
                            <div className=' card itemCart'>
                                <h5 className="tileItemCart">{item.title}</h5>
                                <p>Cantidad: {item.quantity}</p>
                                <p>${item.quantity * parseFloat(item.price)}</p>
                                <button className="btn" onClick={() => {removeItem(item.id)}}>Eliminar</button>
                            </div>
                            )
                        )
                    }
                    <div className="containerTotalCart">
                        <div className='totalCart'>
                            <h5 className="tileItemCart">Total: ${cartDetail().priceTotal}</h5>
                            <button className ="btn" onClick={clear}>Borrar carrito</button>
                        </div>
                    </div>
                    
                </div>
                
            : // Carrito vacio   
                <div className="emptyCartContainer">
                    <img className="imageEmptyCart" src="/images/cart_empty.png" alt='empty cart'/>
                    <p>Tu carrito esta vacio</p>
                    <NavLink to={'/'} key={'1'}> <button className ="btn">Ir a comprar</button> </NavLink>
                </div>
            }
        </div>
    )
}

export default Cart;