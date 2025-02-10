import React, { useState, useEffect } from "react";
import axios from 'axios';
import './HeadText.css'
import './Grid.css'
import './Spinner.css'
import Choices from "./Choices";

export default function Illust() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTerminal, setShowTerminal] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    const fetchImages = async (page = 1) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/images?page=${page}&limit=16`);
            setImages(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchImages(1);
    }, []);

    // Ensure there are enough images
    const firstRowImages = images.slice(0, 8); // First 8 images for the first row
    const secondRowImages = images.slice(8, 16); // Next 8 images for the second row

    // Duplicate images for seamless animation
    const duplicatedFirstRowImages = [...firstRowImages, ...firstRowImages];
    const duplicatedSecondRowImages = [...secondRowImages, ...secondRowImages];

    return (
        <div>
            <Choices first="Illustration" second="Animation" />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.illustrations_*</span></p>
            <div className="Grid-Container">
                <div className={`Grid ${showTerminal ? 'show' : ''}`}>{ }
                    {showTerminal && (
                        <>
                            {loading ? (
                                <div className="Spinner">Loading...</div>
                            ) : (
                                <>
                                    <div className="Grid-Flex row-right-to-left"> {/* First row: right to left */}
                                        {duplicatedFirstRowImages.map((image, index) => (
                                            <div className="image-box" key={`${image._id}-right-${index}`}
                                                onClick={() => handleImageClick(image)}>
                                                <img src={image.url} alt={image.name} />
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ height: "5px" }}></div>
                                    <div className="Illust-Center"><p className="Illust-Text">ILLUSTRATIONS</p></div>
                                    <div style={{ height: "5px" }}></div>
                                    <div className="Grid-Flex row-right-to-left"> {/* Second row: left to right */}
                                        {duplicatedSecondRowImages.map((image, index) => (
                                            <div className="image-box" key={`${image._id}-left-${index}`}
                                                onClick={() => handleImageClick(image)}>
                                                <img src={image.url} alt={image.name} />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className={`modal ${selectedImage ? 'active' : ''}`} onClick={closeModal}>
                <span className="modal-close">&times;</span>
                {selectedImage && (
                    <img src={selectedImage.url} alt={selectedImage.name} onClick={(e) => e.stopPropagation()} />
                )}
            </div>
        </div>
    )
}