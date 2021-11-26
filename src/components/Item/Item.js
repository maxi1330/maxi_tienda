import { Link } from "react-router-dom";
import "./Item.css";

function Item ({item}) {
    return (
        <>
        <div className="col s8 m6 xl3 center" >
            <Link to={`/item/${item.id}`}>
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={item.image}
                                alt='imagen auto'
                                height='220'/>
                        <span className="card-title">{item.title}</span>
                    </div>
                    <div className="card-content">
                        <textarea>{item.description}
                        </textarea><br/>
                        <p>{item.price}</p>
                    </div>
                    <div className="card-action center">
                        <button className="btn">Agregar al carrito</button>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
    
}

export default Item