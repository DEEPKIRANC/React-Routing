import React from "react"
import "./App.css"
import {Link} from "react-router-dom";
function Nav() {
    const style={
        color:'white',
        textDecoration:'none'
    }
  return (
    <div class="navbar">
      <h3>Logo</h3>
      <ul class="nav-links">
          <Link style={style} to='/about'>
            <li>About</li>
          </Link>
          <Link style={style} to='/shop'>
            <li>Shop</li>   
          </Link>
          
      </ul>
    </div>
  );
}

export default Nav;
