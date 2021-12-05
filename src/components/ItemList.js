import Item from './Item/Item';

function ItemList ({items}) {
    return (
        <div className='row'>
            {items.map((item) =>(
                    <Item key={item.id} item={item}/>
                    )
                )
            }
        </div >
    );
    
}

export default ItemList;