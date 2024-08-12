import React, { useState, useEffect } from 'react'
import './Navbar.css'

function NavigationBar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth > 950) {
      setSidebarVisible(false); // Hide sidebar if width exceeds 950px
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <nav>
        <ul className={`Sidebar ${isSidebarVisible ? 'active' : ''}`}>
          <li onClick={toggleSidebar}>
            <a href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#000000'
              >
                <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
              </svg>
            </a>
          </li>
          <li><a href='#'>Who is Nice?</a></li>
          <li><a href='#'>Illustrations</a></li>
          <li><a href='#'>Animations</a></li>
          <li><a href='#'>Live2D Rigs</a></li>
          <li><a href='#'>Game Projects</a></li>
          <li><a href='#'>World</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <nav className='App-header'>
        <ul>
          <li>
            <a>
              <p><strong>HehNiceArt</strong></p>
            </a>
          </li>
          <li className='hideOnMobile'><a href='#'>Who is Nice?</a></li>
          <li className='hideOnMobile'><a href='#'>Illustrations</a></li>
          <li className='hideOnMobile'><a href='#'>Animations</a></li>
          <li className='hideOnMobile'><a href='#'>Live2D Rigs</a></li>
          <li className='hideOnMobile'><a href='#'>Game Projects</a></li>
          <li className='hideOnMobile'><a href='#'>World</a></li>
          <li className='hideOnMobile'><a href='#'>Contact</a></li>
          <li onClick={toggleSidebar} className='Hamburger'>
            <a href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='22px'
                viewBox='0 -960 960 960'
                width='22px'
                fill='#000000'
              >
                <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationBar