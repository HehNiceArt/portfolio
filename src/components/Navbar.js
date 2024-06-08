import React from "react";
import './Navbar.css';


function NavigationBar() {
    function ShowSidebar(){
        const sidebar = document.querySelector('.Sidebar')
        sidebar.style.display = 'flex'
    }
    function HideSidebar(){
        const sidebar = document.querySelector('.Sidebar')
        sidebar.style.display = 'none'
    }
    return (
        <div>
            <nav>
            <ul className="Sidebar">
                <li onClick={HideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="#">llustrations</a></li>
                <li><a href="#">Animations</a></li>
                <li><a href="#">Live2D Rigs</a></li>
                <li><a href="#">Game Projects</a></li>
                <li><a href="#">World</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
            <nav className="App-header">
            <ul>
                <li><a><p><strong>HehNiceArt</strong></p></a></li>
                <li className="hideOnMobile"><a href="#">Illustrations</a></li>
                <li className="hideOnMobile"><a href="#">Animations</a></li>
                <li className="hideOnMobile"><a href="#">Live2D Rigs</a></li>
                <li className="hideOnMobile"><a href="#">Game Projects</a></li>
                <li className="hideOnMobile"><a href="#">World</a></li>
                <li className="hideOnMobile"><a href="#">Contact</a></li>
                <li onClick={ShowSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;