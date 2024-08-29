import React, { useState, useEffect } from "react";
import axios from 'axios';
import './HeadText.css'
import './Grid.css'

export default function Illust() {
    const [images, setImages] = useState([]);
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/images');
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchImages();
    }, []);

    // Ensure there are enough images
    const firstRowImages = images.slice(0, 8); // First 8 images for the first row
    const secondRowImages = images.slice(8, 16); // Next 8 images for the second row

    // Duplicate images for seamless animation
    const duplicatedFirstRowImages = [...firstRowImages, ...firstRowImages];
    const duplicatedSecondRowImages = [...secondRowImages, ...secondRowImages];

    return (
        <div>
            <div className="Head-Container">
                <p className="Head-Text">Illustration</p>
                <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.illustrations_*</span></p>
            </div>
            <div className="Grid-Container">
                <div className={`Grid ${showTerminal ? 'show' : ''}`}>{ }
                    {showTerminal && (
                        <>
                            <div className="Grid-Flex row-right-to-left"> {/* First row: right to left */}
                                {duplicatedFirstRowImages.map((image, index) => (
                                    <div className="image-box" key={`${image._id}-right-${index}`}>
                                        <img src={image.url} alt={image.name} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ height: "5px" }}></div>
                            <div className="Grid-Flex row-right-to-left"> {/* Second row: left to right */}
                                {duplicatedSecondRowImages.map((image, index) => (
                                    <div className="image-box" key={`${image._id}-left-${index}`}>
                                        <img src={image.url} alt={image.name} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}