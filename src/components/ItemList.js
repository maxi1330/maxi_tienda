import { Fragment } from 'react';
import Item from './Item';

function ItemList ({items}) {
    return (
        <Fragment class='row'>
            {items.map((item) =>(
                    <Item key={item.id} item={item}/>
                    )
                )
            }
        </Fragment >
    );
    
}

export default ItemList;