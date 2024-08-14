import React, { useEffect, useState } from "react";
import './Flexbox.css'
import './Content.css';

function ContentBody() {
    const [latestImage, setLatestImage] = useState('');
    const [description, setDescription] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(prev => !prev);
    }

    useEffect(() => {
        const fetchLatestImage = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/posts/latest');
                const text = await response.text(); // Get the response as text
                console.log('Latest Image:', text); // Log the raw response

                // Check if the response is valid JSON
                try {
                    const data = JSON.parse(text); // Parse the text as JSON
                    setLatestImage(data.imageUrl);
                    setDescription(data.description);
                } catch (jsonError) {
                    console.error('JSON parsing error:', jsonError);
                    console.error('Response was not valid JSON:', text);
                }
            } catch (error) {
                console.error('Error fetching the latest image: ', error);
            }
        };
        fetchLatestImage();

        const checkIfMobile = () => {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        }
        checkIfMobile();
    }, []);
    return (
        <div className={`flex-container ${isMobile ? 'mobile' : ''}`}>
            {latestImage && <img src={latestImage} alt={description} className="flex-image"></img>}
            <div className="flex-text">
                <h1 className="large-title">HehNiceArt</h1>
                <p className="fancy">it's my name.</p>
                <div onClick={toggleLinks}><p className="fancy">/<span className="blink">access.log_*</span></p></div>
                <div className={`link-container ${showLinks ? 'show' : ''}`}>{ }
                    {showLinks && (
                        <>
                            <li className="links"><a href="#">Who is Nice?</a></li>
                            <li className="links"><a href="#">Illustrations</a></li>
                            <li className="links"><a href="#">Animations</a></li>
                            <li className="links"><a href="#">Live2D Rigs</a></li>
                            <li className="links"><a href="#">Game Projects</a></li>
                            <li className="links"><a href="#">World</a></li>
                            <li className="links"><a href="#">Contact</a></li>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContentBody;