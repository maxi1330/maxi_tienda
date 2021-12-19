import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { productList } from "../data/productsList";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemListContainer () {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ref = collection(db,'products');
        getDocs(ref)
        .then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });
            const categorias =  products.filter((item) => item.category === `${categoryId}`);
            categoryId ? setItems(categorias) : setItems(products);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        !loading ? 
        <div className='container row'>
            <ItemList items={items}/>
        </div>
        :
        <div>Cargando...</div>
    );
}

export default ItemListContainer;