import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail ({title, image, description, price, stock, onAdd, goToCart }) {
    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s7">
                        <img className="imageItem center responsive-img" src={image} alt=""/>
                    </div>
                    <div className="col s5">
                        <div>
                            <h5>{title}</h5>
                            <p className="light">{description}</p>
                            <p className="priceItem">Precio: ${price}</p>
                        </div>
                        {!goToCart ? 
                            <ItemCount stock={stock} initial={1} onAdd={onAdd}/> :
                            <div className="btnTerminarCompra center">
                                <Link to='/cart'><button className="btn">Ver carrito</button></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail