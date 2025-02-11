import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Flexbox.css'
import { api, endpoints } from '../config/api.js';
import logError from '../utils/errorHandler.js';

function ContentBody() {
    const [latestImage, setLatestImage] = useState('');
    const [description, setDescription] = useState('');
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(prev => !prev);
    }

    useEffect(() => {
        const fetchLatestImage = async () => {
            try {
                const data = await api.get(`${endpoints.posts}/latest`);
                console.log(data);
                setLatestImage(data.imageUrl);
                setDescription(data.description);
            } catch (error) {
                logError(error, 'fetchLatestImage');
            }
        };
        fetchLatestImage();
    }, []);
    return (
        <div className='flex-container'>
            <div className="flex-padd">
                {latestImage && <img src={latestImage} alt={description} className="flex-image"></img>}
                <div className="flex-column">
                    <div className="flex-text">
                        <h1 className="large-title">HehNiceArt</h1>
                        <p className="fancy">it's my name.</p>
                        <div onClick={toggleLinks}><p className="fancy"><span className="slash">/</span><span className="blink">access.log_*</span></p></div>
                    </div>
                    <div className="links-text">
                        <div className={`link-container ${showLinks ? 'show' : ''}`}>{ }
                            {showLinks && (
                                <>
                                    <li className="links"><Link to="/WhoIsNice">Who is Nice?</Link></li>
                                    <li className="links"><Link to="/Illustration">Illustrations</Link></li>
                                    <li className="links"><Link to="/Animation">Animations</Link></li>
                                    <li className="links"><Link to="/Live2D">Live2D Rigs</Link></li>
                                    <li className="links"><Link to="/GameProjects">Game Projects</Link></li>
                                    <li className="links"><Link to="/World">World</Link></li>
                                    <li className="links"><Link to="/Contact">Contact</Link></li>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBody;