import { Fragment } from 'react';
import Item from './Item/Item';

function ItemList ({items}) {
    return (
        <Fragment className='row'>
            {items.map((item) =>(
                    <Item key={item.id} item={item}/>
                    )
                )
            }
        </Fragment >
    );
    
}

export default ItemList;