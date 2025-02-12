import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
        <Link className='title' to='/'> <p><strong>HehNiceArt</strong></p></Link>
        <nav className='hideOnMobile'><Link className="nav-links" to='/WhoIsNice'>Who is Nice?</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/Illustration'>Illustrations</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/Animation'>Animations</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/Live2D'>Live2D Rigs</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/GameProjects'>Game Projects</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/World'>World</Link></nav>
        <nav className='hideOnMobile'><Link className="nav-links" to='/Contact'>Contact</Link></nav>

        <li onClick={toggleSidebar} className='Hamburger'>
          <svg xmlns='http://www.w3.org/2000/svg' height='22px' viewBox='0 -960 960 960' width='22px' fill='#000000'>
            <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
          </svg>
        </li>
      </div>
      <nav>
        <ul className={`Sidebar ${isSidebarVisible ? 'active' : ''}`}>
          <li className="cross" onClick={toggleSidebar}>
            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
              <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
            </svg>
          </li>
          <li className='sidebar-links'><Link to='/WhoIsNice'>Who is Nice?</Link></li>
          <li className='sidebar-links'><Link to='/Illustration'>Illustrations</Link></li>
          <li className='sidebar-links'><Link to='/Animation'>Animations</Link></li>
          <li className='sidebar-links'><Link to='/Live2D'>Live2D Rigs</Link></li>
          <li className='sidebar-links'><Link to='/GameProjects'>Game Projects</Link></li>
          <li className='sidebar-links'><Link to='/World'>World</Link></li>
          <li className='sidebar-links'><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavigationBar