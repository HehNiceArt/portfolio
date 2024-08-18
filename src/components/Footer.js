import React, { useEffect, useState } from "react";
import './Footer.css'

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY;
            setIsVisible(top > 1300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`Footer-Container ${isVisible ? 'F-fade-in' : 'F-fade-out'}`}>
            <div className="Footer-Head">
                <a className="Footer-Title"><strong>HehNiceArt</strong></a>
                <ul className="Socmed-Links">
                    <a href="#">Youtube</a>
                    <a href="#">X (Twitter)</a>
                    <a href="#">Itch.IO</a>
                </ul>
            </div>
            <div className="Footer-Copyright">
                <div className="Footer-CopyrightText">
                    <p>© 2024 - 2024</p>
                    <p>last-updated <span>2024.08.14</span></p>
                    <p>website made by HehNiceArt</p>
                </div>
            </div>
        </div>
    )
}

export default Footer