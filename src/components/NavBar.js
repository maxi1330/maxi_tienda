import React , {Component} from 'react';

export default class NavBar extends Component{
    render () {
        return (
            <nav class="deep-purple accent-3">
            <div class="nav-wrapper container">
              <a href="#" class="brand-logo">LIBRE MERCADO</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Vehiculos</a></li>
                <li><a href="#">Inmuebles</a></li>
                <li><a href="#">Electronica</a></li>
                <li><a href="#">Hogar</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}