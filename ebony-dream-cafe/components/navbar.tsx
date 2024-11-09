// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-items'>
        <Link href='/' passHref>
          <span className='navbar-link'>Home</span>
        </Link>
        <Link href='/#about' passHref>
          <span className='navbar-link'>About Us</span>
        </Link>
        <Link href='/#about-2' passHref>
          <span className='navbar-link'>What we Offer</span>
        </Link>
        <Link href='/member' passHref>
          <span className='navbar-link'>Membership</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
