import React, {useState} from 'react';
import imagenAuto from '../images/auto01.webp';

function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(initial);

    const addItem = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const removeItem = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    return (
    <>
        <div className="row">
            <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img src={imagenAuto}
                         alt='imagen auto'/>
                    <span className="card-title">Volkswagen Golf 1.4</span>
                </div>
                <div className="card-content">
                    <p>2019 | 58.000 km · Hace 11 días<br/>
                        Volkswagen Golf 1.4 Comfortline Tsi<br/>
                        $3.750.000<br/>
                        Stock: {count}
                    </p><br/>
                    <div className="row valign-wrapper">
                        <button className="btn-floating btn-small blue s2"
                                onClick={() => addItem()}>
                                    <i className="material-icons">add</i>
                        </button>
                        <div className="col s10 center-align">{count}</div>
                        <button className="btn-floating btn-small blue s2"
                                onClick={() => removeItem()}>
                                    <i className="material-icons">remove</i>
                        </button>
                    </div>
                </div>
                <div className="card-action center">
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
            </div>
        </div>
    </>
    );
}
export default ItemCount;