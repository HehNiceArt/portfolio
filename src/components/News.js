import React from "react";
import './News.css'

function NewsBar() {
    return (
        <div className="NewsContainer">
            <div className="News-header">NEWS</div>
            <div className="News-Panel">
                <div className="News-Content">
                    <p className="News-Date">2024.08.13</p>
                    <p className="News-Title"><a href="#">title</a></p>
                    <div className="News-Divider"></div>
                    <p className="News-Description">Description</p>
                </div>
            </div>
            <div className="News-Panel">
                <div className="News-Content">
                    <p className="News-Date"><span>2024</span><span>.</span><span>08</span><span>.</span><span>13</span></p>
                    <p className="News-Title"><a href="#">title</a></p>
                    <div className="News-Divider"></div>
                    <p className="News-Description">Description</p>
                </div>
            </div>
        </div>
    )
}

export default NewsBar