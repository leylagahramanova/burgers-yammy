'use client'
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
const Navbar = () => {
  const pathname = usePathname()
  useEffect(() => {
    const mobileMenu = () => {
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__menu');
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      document.body.style.overflowX = menu.classList.contains('is-active') ? 'hidden' : 'auto';
    };

    const menu = document.querySelector('#mobile-menu');
    menu.addEventListener('click', mobileMenu);

    // Cleanup event listener on component unmount
    return () => {
      menu.removeEventListener('click', mobileMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div id="navbar__logo">
          <div className="logo-holder logo-7" id="logo">
            <img className="flower" src="images/Yammy.png" alt="Yammy Logo" />
            <h4>Yammy</h4>
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
<li   className='navbar__item'>
            <Link href="/" className={`navbar__links ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>

          <li className='navbar__item'>
            <Link href="/about" className={`navbar__links ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          </li>
          <li className="navbar__item">
            <Link href="/contacts" className={`navbar__links ${pathname === '/contacts' ? 'active' : ''}`} >Contact</Link>
          </li>
          <li className='navbar__item' >
            <Link href="/gallery" className={`navbar__links ${pathname === '/gallery' ? 'active' : ''}`}>Food Gallery</Link>
          </li>
          <li className="navbar__item">
            <Link href="/order-online" className={`navbar__links ${pathname === '/order-online' ? 'active' : ''}`}>ORDER ONLINE</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
