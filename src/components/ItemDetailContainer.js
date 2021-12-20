import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { doc, getDoc, getFirestore} from 'firebase/firestore';

function ItemDetailContainer () {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [goToCart, setgoToCart] = useState(false);
    const { itemId } = useParams();
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        addToCart(product, quantity);
        setgoToCart(true);
    };

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, 'products', itemId);
        getDoc(ref).then((snapshot) => {
            setProduct({
                id: snapshot.id,
                ...snapshot.data(),
            })
        });
        setLoading(false);
    }, [itemId]);

    return (
        !loading ? 
        <div className='container row'>
            <ItemDetail {...product} onAdd= {onAdd} goToCart={goToCart}/>
        </div>
        :
        <div>Cargando...</div>
    );
}

export default ItemDetailContainer;