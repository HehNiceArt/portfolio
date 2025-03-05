import React, { useState, useEffect } from "react";
import './Footer.css'

function Footer() {
    const [lastUpdated, setLastUpdated] = useState('');
    const [copyrightYear, setCopyrightYear] = useState('');

    useEffect(() => {
        const startYear = 2024;
        const currentYear = new Date().getFullYear();
        setCopyrightYear(`${startYear} - ${currentYear}`);

        const formatDate = (date) => {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}.${month}.${day}`;
        };
        const lastMod = formatDate(document.lastModified);
        setLastUpdated(lastMod);
    }, []);

    return (
        <div className="Footer-Container">
            <div className="Footer-Head">
                <p className="Footer-Title"><strong>HehNiceArt</strong></p>
                <ul className="Socmed-Links">
                    <a href="https://www.youtube.com/@HehNiceArt" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.simpleicons.org/youtube/656CAF" width="24" height="24" alt="YouTube"></img>
                    </a>
                    <a href="https://x.com/HehNiceArt" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.simpleicons.org/x/twitter/656CAF" width="24" height="24" alt="Twitter"></img>
                    </a>
                    <a href="https://hehnice.itch.io/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.simpleicons.org/itchdotio/656CAF" width="24" height="24" alt="Itch.io"></img>
                    </a>
                    <a href="https://unityroom.com/users/7r96le185v43jtaihfc0" target="_blank" rel="noopener noreferrer">
                        <img src="https://unityroom.com/assets/logo-ffdd89a7b57c7c7c3f39d8fdecbde0f6d2ed33aea6afc1f0c0526f7d3ac4238f.svg#svgView(viewBox(0,0,90,150))"
                            width="24"
                            height="24"
                            style={{ filter: "brightness(0) saturate(100%) invert(40%) sepia(88%) saturate(273%) hue-rotate(196deg) brightness(91%) contrast(89%)" }}
                            alt="Unityroom"></img>
                    </a>
                    <a href="https://ko-fi.com/hehniceart" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.simpleicons.org/kofi/656CAF" width="24" height="24" alt="ko-fi"></img>
                    </a>
                </ul>
            </div>
            <div className="Footer-Copyright">
                <div className="Footer-CopyrightText">
                    <p>© {copyrightYear}</p>
                    <p>last updated <span>{lastUpdated}</span></p>
                    <p>website made by HehNiceArt</p>
                </div>
            </div>
        </div>
    )
}

export default Footer