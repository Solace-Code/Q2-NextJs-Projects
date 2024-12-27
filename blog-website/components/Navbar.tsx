import React from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link href="/">
          <h1>Dreamscript</h1>
        </Link>
      </div>
      <div className='navbar-content'>
        <ul className='navbar-ul'>
          <li className='navbar-li'>
            <Link href="/" className='navbar-link'>Home</Link>
          </li>
          <li className='navbar-li'>
            <Link href="/blog-dashboard" className='navbar-link'>Blog</Link>
          </li>
          <li className='navbar-li'>
            <Link href="/#about" className='navbar-link'>About</Link>
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
            placeholder='What would you be reading today?' 
            className='navbar-search-input'
          />
        </div>
        <CiSearch className='search-icon' />
      </div>
    </div>
  );
}

export default Navbar;