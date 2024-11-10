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
        <Link href='/about' passHref>
          <span className='navbar-link'>About Me</span>
        </Link>
        <Link href='/contact' passHref>
          <span className='navbar-link'>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
