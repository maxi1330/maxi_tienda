import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { productList } from "../data/productsList";

function ItemListContainer () {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(productList)
                resolve(categoryId ? productList.filter(item => item.category === categoryId) : productList);
            }, 1000);
        });
    
        getProducts.then((res) => {
            setItems(res);  
        })
        .catch((error) => {
            console.log(error);
        })  
   
    }, [categoryId]);

    return (
        <fragment className='container row'>
            <ItemList items={items}/>
        </fragment>
    );
}

export default ItemListContainer;