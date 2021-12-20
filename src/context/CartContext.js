import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [userEmail, setUserEmail] = useState('');

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            //Si esta en el carrito le sumo la cantidad
            cart.map( function(product){
                if(product.id === item.id){
                    product.quantity = product.quantity + quantity;
                }
                return product;
              });
        } else {
            //Si no esta, lo agrego
            addItem(item, quantity);
        }
        
    }

    //Borrar todo el carrito
    const clear = () => {
        setCart([]);
    }

    //Borra item por ID
    const removeItem = (itemId) => {
        setCart(cart.filter((element)=> element.id !== itemId));
    }

    //Agrega item al carrito
    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}]);
    }

    //Existe en el carrito
    const isInCart = (itemId) => {
        let productSearch = cart.find((element)=> element.id === itemId);
        return  (productSearch !== undefined);
    }

    const cartDetail = () => {
        let priceTotal = 0;
        let quantityProducts = 0;
        cart.map( function(product){
            quantityProducts += product.quantity;
            priceTotal += product.quantity * product.price;
            return product;
          });
        return {priceTotal, quantityProducts}
    }

    const setUser = (form) => {
        setUserEmail(form);
    }

    return (
        <CartContext.Provider value={
            {addToCart, 
             clear, 
             removeItem, 
             cart, 
             cartDetail, 
             setUser, 
             userEmail}}>
                 {children}
        </CartContext.Provider>
    )
}