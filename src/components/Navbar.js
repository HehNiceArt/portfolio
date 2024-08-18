import React, { useState, useEffect } from 'react'
import './Navbar.css'

function NavigationBar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('60px');

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth > 950) {
      setSidebarVisible(false); // Hide sidebar if width exceeds 950px
    }
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newHeight = scrollY > 50 ? '60px' : '50px';
    setNavbarHeight(newHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount

    };
  }, []);

  return (
    <div className='App-header' style={{ height: navbarHeight }}>
      <div className='nav-container'>
        <a className='title'> <p><strong>HehNiceArt</strong></p></a>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Who is Nice?</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Illustrations</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Animations</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Live2D Rigs</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Game Projects</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>World</a></nav>
        <nav className='hideOnMobile'><a className="nav-links" href='#'>Contact</a></nav>
      </div>

      <li onClick={toggleSidebar} className='Hamburger'>
        <a href='#'>
          <svg xmlns='http://www.w3.org/2000/svg' height='22px' viewBox='0 -960 960 960' width='22px' fill='#000000'>
            <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
          </svg>
        </a>
      </li>
      <nav>
        <ul className={`Sidebar ${isSidebarVisible ? 'active' : ''}`}>
          <li className="cross" onClick={toggleSidebar}>
            <a href='#'>
              <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
                <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
              </svg>
            </a>
          </li>
          <li className='sidebar-links'><a href='#'>Who is Nice?</a></li>
          <li className='sidebar-links'><a href='#'>Illustrations</a></li>
          <li className='sidebar-links'><a href='#'>Animations</a></li>
          <li className='sidebar-links'><a href='#'>Live2D Rigs</a></li>
          <li className='sidebar-links'><a href='#'>Game Projects</a></li>
          <li className='sidebar-links'><a href='#'>World</a></li>
          <li className='sidebar-links'><a href='#'>Contact</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavigationBar