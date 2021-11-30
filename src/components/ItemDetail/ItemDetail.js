import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import React, {useState} from 'react';

function ItemDetail ({title, image, description, price, stock }) {
    const [goToCart, setgoToCart] = useState(false);

    const onAdd = (cantidad) => {
        console.log(cantidad);
        setgoToCart(true);
    };

    return (
        <>
            <div class="container">
                <div class="section">
                    <div class="row">
                        <div class="col s7">
                            <img className="imageItem center responsive-img" src={image} alt=""/>
                        </div>
                        <div class="col s5">
                            <div>
                                <h4>{title}</h4>
                                <p class="light">{description}</p>
                                <p className="priceItem">Precio: {price}</p>
                            </div>
                            {!goToCart ? 
                                <ItemCount stock={stock} initial={1} onAdd={onAdd}/> :
                                <div className="btnTerminarCompra center">
                                <Link to='/cart'><button className="btn">Terminar compra</button></Link>
                            </div>}
                            
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail