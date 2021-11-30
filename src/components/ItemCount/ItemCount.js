import React, {useState} from 'react';
import "./ItemCount.css";

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
        <div >
            <div className="contador">
                <button className="btn-floating btn-small blue" onClick={removeItem}>-</button>
                <h4 className="number center-align">{count}</h4>
                <button className="btn-floating btn-small blue" onClick={addItem}>+</button>
            </div>
            <div className="card-action center">
                <button className="btn" onClick={() => onAdd(count)} disabled={count===0}>Agregar al carrito</button>
            </div>
        </div>
    </>
    );
}
export default ItemCount;