import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {cart, clear} = useContext(CartContext);

    console.log(cart);
    return (
        <div>
            <button onClick={clear}>Borrar carrito</button>
             {
             cart.map((item) =>(
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Cart;