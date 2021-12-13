import CartWidget from './CartWidget';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar () {

  const { cartDetail } = useContext(CartContext);
  const { quantityProducts } = cartDetail();

  const categories = [
    { id: '1', address: '/', text: 'Todos los productos'},
    { id: '2', address: '/category/phones', text: 'Celulares'},
    { id: '3', address: '/category/tablets', text: 'Tablets'},
  ]

  return (
    <nav className="deep-purple accent-3">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo left">LIBRE MERCADO</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {categories.map( (cat) => {
              return <li><NavLink to={cat.address} key={cat.id}>{cat.text}</NavLink></li>;})
          }
          <li hidden={quantityProducts < 1}><NavLink to={'/cart'} key={'4'}><CartWidget className="right" quantity={quantityProducts}/></NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;