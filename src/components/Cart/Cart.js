import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "./../../context/CartContext";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import Order from "../Order/Order";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

const Cart = () => {
    const {cart, clear, removeItem, cartDetail, setUser} = useContext(CartContext);
    const [formUser, setForm] = useState({ nombre: "", email: ""});
    const [goTicket, setGoTicket] = useState(false)
    
    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formUser,
            [name]: value
        });
    };

    const finalizar = () => {
        setUser(formUser);
        const date = new Date();
        const db = getFirestore();
        const ref = collection(db,'ticket');
        const newOrder = {
            buyer: formUser.email,
            items: cart,
            date: date,
            total: cartDetail().priceTotal
        }
        addDoc(ref, newOrder);
        setGoTicket(true);
        clear();
    }

    return (
        !goTicket ?
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
                    <div className='containerTotalCart'>
                            <form
                            method="POST"
                            onSubmit={finalizar}>
                                <input 
                                    onChange={llenarFormulario}
                                    type="text"
                                    name="nombre"
                                    placeholder="nombre"
                                />
                                <input 
                                    onChange={llenarFormulario}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                />
                                <button disabled = {
                                    formUser.nombre === '' ||
                                    formUser.email === ''}
                                    className ="btn" type='submit'>
                                        Finalizar compra
                                </button>
                            </form>
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
        : <Order/>
    );
}

export default Cart;