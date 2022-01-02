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
                    </div>
                    <div className="card-content">
                        <p className='item_price'>${item.price}</p>
                        <textarea className='item_description' value={item.description} readOnly/><br/> 
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
    
}

export default Item