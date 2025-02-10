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
                    <a href="https://www.youtube.com/@HehNiceArt" target="_blank" rel="noopener noreferrer">Youtube</a>
                    <a href="https://x.com/HehNiceArt" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                    <a href="https://hehnice.itch.io/" target="_blank" rel="noopener noreferrer">Itch.IO</a>
                    <a href="https://unityroom.com/users/7r96le185v43jtaihfc0" target="_blank" rel="noopener noreferrer">Unityroom</a>
                    <a href="https://ko-fi.com/hehniceart" target="_blank" rel="noopener noreferrer">Ko-fi</a>
                </ul>
            </div>
            <div className="Footer-Copyright">
                <div className="Footer-CopyrightText">
                    <p>© {copyrightYear}</p>
                    <p>last-updated <span>{lastUpdated}</span></p>
                    <p>website made by HehNiceArt</p>
                </div>
            </div>
        </div>
    )
}

export default Footer