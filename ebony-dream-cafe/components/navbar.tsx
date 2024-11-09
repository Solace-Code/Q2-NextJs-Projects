// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
   <div className='navbar-container'>
    <div className='navbar-items'>
      <a href='/'>Home</a>
      <a href='/#about'>About US</a>
      <a href='/#about-2'>What we Offer</a>
      <a href='/member'>MemberShip</a>
    </div>
   </div>
  );
};

export default Navbar;
