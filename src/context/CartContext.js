import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        if(isInCart(item.id)){
            //Si esta en el carrito le sumo la cantidad
            cart.map( function(product){
                if(product.item.id === item.id){
                    product.item.quantity = product.item.quantity + item.quantity;
                }
                return product;
              });
        } else {
            //Si no esta, lo agrego
            addItem(item);
        }
        
    }

    //Borrar todo el carrito
    const clear = () => {
        setCart([]);
    }

    //Borra item por ID
    const removeItem = (itemId) => {
        //Busco el producto, busco el indice y lo borro
        let productSearch = cart.find((element)=> element.item.id === itemId);
        if(productSearch === undefined) {return}
        let index = cart.indexOf(productSearch);
        cart.splice(index,1);
    }

    //Agrega item al carrito
    const addItem = (item) => {
        setCart([...cart, {item}]);
    }

    //Existe en el carrito
    const isInCart = (itemId) => {
        let productSearch = cart.find((element)=> element.item.id === itemId);
        return  (productSearch !== undefined);
    }

    return (
        <CartContext.Provider value={{addToCart, clear, removeItem, cart}}>{children}</CartContext.Provider>
    )
}