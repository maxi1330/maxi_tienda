function CartWidget(props){

    return (
        <a href="#"><i className="material-icons left">shopping_cart</i>{props.quantity}</a>
    );
}
export default CartWidget;