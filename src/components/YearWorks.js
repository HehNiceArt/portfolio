import React from "react";
import './YearWorks.css'
import testImage from '../assets/Kohana Yumi.jpg'

function YearWorks() {
    return (
        <div className="YW-Container">
            <div className="YW-Header">WORKS</div>
            <div className="YW-Panel">
                <div className="YW-ContentContainer">
                    <div className="YW-TextContainer">
                        <div className="YW-Year">2024</div>
                        <div className="YW-list">
                            <ul className="YW-listContainer">
                                <li><p className="YW-listContent">Participated in Global Game Jam 2024</p></li>
                                <li><p className="YW-listContent">Submitted Pugsly for Global Game Jam 2024</p></li>
                                <li><p className="YW-listContent">Created and hosted this website</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src={testImage} className="YW-ImageContainer"></img>
                </div>
            </div>
            <div className="YW-Panel">
                <div className="YW-ContentContainer">
                    <div className="YW-TextContainer">
                        <div className="YW-Year">2023</div>
                        <div className="YW-list">
                            <ul className="YW-listContainer">
                                <li><p className="YW-listContent">Participated in Game Jam Plus 2023/2024</p></li>
                                <li><p className="YW-listContent">Submitted Bebe's Sanctuary for Game Jam 2023/2024</p></li>
                                <li><p className="YW-listContent">idk lol</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src={testImage} className="YW-ImageContainer"></img>
                </div>
            </div>
        </div>
    )
}

export default YearWorks