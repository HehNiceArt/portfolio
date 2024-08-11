import React, { useEffect, useState } from "react";
import './Flexbox.css'
import './Content.css';

function ContentBody() {
    const [latestImage, setLatestImage] = useState('');

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
                } catch (jsonError) {
                    console.error('JSON parsing error:', jsonError);
                    console.error('Response was not valid JSON:', text);
                }
            } catch (error) {
                console.error('Error fetching the latest image: ', error);
            }
        };

        fetchLatestImage();
    }, []);
    return (
        <div className="flex-container">
            {latestImage && <img src={latestImage} alt="Description" className="flex-image"></img>}
            <div className="flex-text">
                <h1 className="large-title">HehNiceArt</h1>
                <p className="fancy">it's my name.</p>
                <p className="fancy">/access.log_*</p>
                <li className="links"><a href="#">Who is Nice?</a></li>
                <li className="links"><a href="#">Illustrations</a></li>
                <li className="links"><a href="#">Animations</a></li>
                <li className="links"><a href="#">Live2D Rigs</a></li>
                <li className="links"><a href="#">Game Projects</a></li>
                <li className="links"><a href="#">World</a></li>
                <li className="links"><a href="#">Contact</a></li>
            </div>
        </div>
    )
}

export default ContentBody;