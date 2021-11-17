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
        <div class="row">
            <div class="col s3">
            <div class="card">
                <div class="card-image">
                    <img src={imagenAuto}
                         alt='imagen auto'/>
                    <span class="card-title">Volkswagen Golf 1.4</span>
                </div>
                <div class="card-content">
                    <p>2019 | 58.000 km · Hace 11 días<br/>
                        Volkswagen Golf 1.4 Comfortline Tsi<br/>
                        $3.750.000<br/>
                        Stock: {count}
                    </p><br/>
                    <div class="row valign-wrapper">
                        <button className="btn-floating btn-small blue s2"
                                onClick={() => addItem()}>
                                    <i className="material-icons">add</i>
                        </button>
                        <div class="col s10 center-align">{count}</div>
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