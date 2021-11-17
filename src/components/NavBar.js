import CartWidget from './CartWidget';

function NavBar () {
  return (
      <nav className="deep-purple accent-3">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo left">LIBRE MERCADO</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Vehiculos</a></li>
          <li><a href="#">Inmuebles</a></li>
          <li><a href="#">Electronica</a></li>
          <li><a href="#">Hogar</a></li>
          <li><CartWidget className="right" quantity='6'/></li>
        </ul>
        
      </div>
    </nav>
  );
}

export default NavBar;