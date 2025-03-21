import React, { useState, useEffect } from "react";
import './HeadText.css'
import './Grid.css'
import './Spinner.css'
import Choices from "./Choices";
import { api, endpoints } from '../config/api.js';
import logError from '../utils/errorHandler.js';

export default function Animations() {
    const [animations, setAnimations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTerminal, setShowTerminal] = useState(true);
    const [selectedAnimation, setSelectedAnimation] = useState(null);
    const TypeWriter = ({ text, delay = 50, className = '' }) => {
        const [displayText, setDisplayText] = useState('');
        useEffect(() => {
            let i = 0;
            setDisplayText('');

            const textString = String(text || '');

            const timer = setInterval(() => {
                if (i < textString.length) {
                    setDisplayText(textString.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, delay);
            return () => clearInterval(timer);
        }, [text, delay]);
        return <span className={className}>{displayText}</span>
    }

    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }

    const handleAnimationClick = (animation) => {
        setSelectedAnimation(animation);
    }

    const closeModal = () => {
        setSelectedAnimation(null);
    }

    const fetchAnimations = async (page = 1) => {
        try {
            const response = await api.get(`${endpoints.animations}?page=${page}&limit=16`);
            setAnimations(response);
        } catch (error) {
            logError(error, 'fetchAnimations');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimations(1);
    }, []);

    // Ensure there are enough animations
    const firstRowAnimations = animations.slice(0, 8); // First 8 animations for the first row
    const secondRowAnimations = animations.slice(8, 16); // Next 8 animations for the second row

    // Duplicate animations for seamless animation
    const duplicatedFirstRowAnimations = [...firstRowAnimations, ...firstRowAnimations];
    const duplicatedSecondRowAnimations = [...secondRowAnimations, ...secondRowAnimations];

    return (
        <div>
            <Choices second="Illustration" third="Animation" />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.animations_*</span></p>
            <div className="Grid-Container">
                <div className={`Grid ${showTerminal ? 'show' : ''}`}>{ }
                    {showTerminal && (
                        <>
                            {loading ? (
                                <div className="Spinner">Loading...</div>
                            ) : (
                                <>
                                    <div className="Grid-Flex row-right-to-left">
                                        {duplicatedFirstRowAnimations.map((animation, index) => (
                                            <div className="image-box" key={`${animation._id}-right-${index}`}
                                                onClick={() => handleAnimationClick(animation)}>
                                                <img src={animation.url} alt={animation.name} />
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ height: "5px" }}></div>
                                    <div className="Illust-Center"><p className="Illust-Text">ANIMATIONS</p></div>
                                    <div style={{ height: "5px" }}></div>
                                    <div className="Grid-Flex row-right-to-left">
                                        {duplicatedSecondRowAnimations.map((animation, index) => (
                                            <div className="image-box" key={`${animation._id}-left-${index}`}
                                                onClick={() => handleAnimationClick(animation)}>
                                                <img src={animation.url} alt={animation.name} />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className={`modal ${selectedAnimation ? 'active' : ''}`} onClick={closeModal}>
                <span className="modal-close">&times;</span>
                {selectedAnimation && (
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedAnimation.url} alt={selectedAnimation.name} />
                        <div className="modal-sidebar">
                            <h2><TypeWriter text={selectedAnimation.name} delay={70} /></h2>
                            <p className="modal-date"><TypeWriter text={new Date(selectedAnimation.createdAt).toLocaleDateString()} delay={70} /></p>
                            <p className="modal-description"><TypeWriter text={selectedAnimation.description} delay={30} /></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
