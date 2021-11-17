import ItemCount from "./ItemCount";

function ItemListContainer (props) {
    return (
        <>
            {/* <div>{props.greeting}</div> */}
            <ItemCount stock={10} initial={0}/>
        </>
    );
}
export default ItemListContainer;