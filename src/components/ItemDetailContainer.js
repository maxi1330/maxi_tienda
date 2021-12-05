import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productList } from "../data/productsList";
import { CartContext } from '../context/CartContext';

function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const [goToCart, setgoToCart] = useState(false);
    const { itemId } = useParams();
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        addToCart(product, quantity);
        setgoToCart(true);
    };

    useEffect(() => {
        const getProduct = new Promise( (resolve,eject) => {
            setTimeout(() => {
                resolve(productList.find((item) => item.id === parseInt(itemId)));
            }, 2000);
        });

        getProduct.then((result) => {
            setProduct (result);
        });
   
    }, [itemId]);

    return (
        <div className='container row'>
            <ItemDetail {...product} onAdd= {onAdd} goToCart={goToCart}/>
        </div>
    );
}

export default ItemDetailContainer;