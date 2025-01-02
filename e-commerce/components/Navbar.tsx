// components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Icon from "./Icons";
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

function Navbar() {
  const { cartItems, setIsCartOpen } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <Link href="/">
            <h1>AlphaForge</h1>
          </Link>
        </div>
        <div className='navbar-content'>
          <ul className='navbar-ul'>
            <li className='navbar-li'>
              <Link href="/" className='navbar-link'>Home</Link>
            </li>
            <li className='navbar-li'>
              <Link href="/shop" className='navbar-link'>Shop</Link>
            </li>
            <li className='navbar-li'>
              <Link href="/#featured" className='navbar-link'>Featured</Link>
            </li>
            <li className='navbar-li'>
              <Link href="/#contact" className='navbar-link'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-items'>
          <div className='navbar-search'>
            <input
              type='text'
              placeholder='Search Products...'
              className='navbar-search-input'
            />
            <div className='navbar-item-search'>
              {Icon.search}
            </div>
          </div>
          <div className='navbar-item-heart'>
            {Icon.heart}
          </div>
          <div className='navbar-item-cart relative cursor-pointer' onClick={() => setIsCartOpen(true)}>
            {Icon.cart}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
      <CartModal />
    </>
  );
}

export default Navbar;