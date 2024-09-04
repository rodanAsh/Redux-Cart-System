import React from 'react'
import './NavBar.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart)
  console.log(cartProducts)
  return (
    <div className='navbar'>
        <Link className='link' to={"/"}>
          <div className="logo">Redux<span>Cart.</span></div>
        </Link>
        <div className="search-product"><FaSearch className='icon' /><input type="search" placeholder='Search Products' /></div>
        <Link to={"/cart"}>
          <div className="cart-icon"><FaCartShopping /><span>{cartProducts.length}</span></div>
        </Link>
    </div>
  )
}

export default NavBar