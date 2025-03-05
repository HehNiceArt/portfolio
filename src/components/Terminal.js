import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import './HeadText.css'
import { api, endpoints } from '../config/api.js';

export default function HeadText() {
    const [showFact, setShowFact] = useState(false);
    const [showTerminal, setShowTerminal] = useState(true);
    const [showImage, setShowImage] = useState(true);
    const [inputVisible, setInputVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const [latestImage, setLatestImage] = useState('');
    const [description, setDescription] = useState('');

    const [terminalZIndex, setTerminalZIndex] = useState(1);
    const [imageZIndex, setImageZIndex] = useState(1);

    useEffect(() => {
        const fetchLatestImage = async () => {
            try {
                const data = await api.get(`${endpoints.posts}/latest`);
                setLatestImage(data.imageUrl);
                setDescription(data.description);
            } catch (error) {
                console.error('Error fetching the latest image: ', error);
            }
        };
        fetchLatestImage();
    }, []);

    const toggleLinks = () => {
        setShowFact(prev => !prev);
    }
    const toggleTerminal = () => {
        if (showTerminal && showImage) { //image and terminal are open
            setShowTerminal(false);
        } else if (showTerminal && !showImage) { //terminal is open and image is closed
            setShowImage(false);
            setShowTerminal(false);
        } else if (!showTerminal && !showImage) {
            setShowImage(true);
            setShowTerminal(true);
        }
    }
    const toggleImage = () => {
        if (showTerminal && showImage) {
            setShowImage(false);
        } else if (showImage && !showTerminal) {
            setShowImage(false);
            setShowTerminal(false);
        } else if (!showImage && !showTerminal) {
            setShowImage(true);
            setShowTerminal(true);
        }
    }
    const toggleTerminalZIndex = () => {
        setTerminalZIndex(10);
        setImageZIndex(1);
    }
    const toggleImageZIndex = () => {
        setImageZIndex(10);
        setTerminalZIndex(1);
    }

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }
    const handleInputSubmit = () => {
        if (userInput === 'HehNiceArt') {
            setResponse('You know it.');
        } else {
            setResponse('Error. Incorrect answer.');
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleInputSubmit();
        }
    }

    return (
        <div>
            <div className="Head-Container">
                <p className="Head-Text">Who Is Nice?</p>
            </div>
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={function (event) { toggleImage(); toggleTerminal(); }}>show.terminal_*</span></p>
            <div className="DragDiv">
                <Draggable>
                    <div className={`Terminal-Container ${showTerminal ? 'show' : ''} ${showImage ? 'show' : ''}`} style={{ zIndex: terminalZIndex }} onClick={toggleTerminalZIndex}>
                        {showTerminal && (
                            <>
                                <div className="Terminal-Head"><p>HehNiceArt</p><span className='Close'><p onClick={toggleTerminal}>X</p></span></div>
                                <div className="Terminal-Content">
                                    <li className="Terminal-Text">An illustrator, indie game developer, Live2D artist and rigger, animator, and aspiring technical artist.</li>
                                    <li className="Terminal-Text">An artist that creates world/s using his own technical skills.</li>
                                    <li className="Terminal-Text">Likes to dabble in multiple disciplines of arts and programming, from illustrations to animations, web development to game development.</li>
                                    <li className="Terminal-Text">Loves algorithms such as Cellular Automata, Wave Function Collapse, and <span onClick={toggleLinks} className="Lindenmayer-Text">Lindenmayer System.</span></li>
                                    <div className={`Lindenmayer-Container ${showFact ? 'show' : ''}`}>
                                        {showFact && (
                                            <>
                                                <div className="Lindenmayer">
                                                    <li className="Terminal-Text">Fact: The Lindenmayer System is the very first algorithm tha HehNiceArt have implemented in a college finals submission.</li>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <li className="Terminal-Text">
                                        {inputVisible ? (
                                            <input
                                                type="text"
                                                value={userInput}
                                                onChange={handleInputChange}
                                                onKeyDown={handleKeyDown}
                                                autoFocus
                                                className="text-entry"
                                            />
                                        ) : (
                                            <p className="blink" onClick={() => setInputVisible(true)}>___</p>
                                        )}
                                    </li>
                                    {response && (
                                        <li className="Terminal-Text">{response}</li>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </Draggable>
                <Draggable>
                    <div className="Image-Holder" style={{ zIndex: imageZIndex }} onClick={toggleImageZIndex}>
                        {showImage && (
                            <>
                                <div className="Image-Close"><p onClick={toggleImage}>X</p></div>
                                <div className="Image-Container">
                                    {latestImage && <img src={latestImage} alt={description} className="Image-img"></img>}
                                </div>
                            </>
                        )}
                    </div>
                </Draggable>
            </div>
        </div>
    );
}