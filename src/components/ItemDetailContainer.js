import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productList } from "../data/productsList";

function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const { itemId } = useParams();

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
        <fragment className='container row'>
            <ItemDetail {...product}/>
        </fragment>
    );
}

export default ItemDetailContainer;