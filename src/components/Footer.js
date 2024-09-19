import React from "react";
import './Footer.css'

function Footer() {
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
                    <p>© 2024 - 2024</p>
                    <p>last-updated <span>2024.08.14</span></p>
                    <p>website made by HehNiceArt</p>
                </div>
            </div>
        </div>
    )
}

export default Footer