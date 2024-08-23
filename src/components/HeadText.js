import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import './HeadText.css'

export default function HeadText() {
    const [showFact, setShowFact] = useState(false);
    const [showTerminal, setShowTerminal] = useState(true);
    const [inputVisible, setInputVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const toggleLinks = () => {
        setShowFact(prev => !prev);
    }
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
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
                <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.terminal_*</span></p>
            </div>
            <div className="DragDiv">
                <Draggable>
                    <div className={`Terminal-Container ${showTerminal ? 'show' : ''}`}>
                        {showTerminal && (
                            <>
                                <div className="Terminal-Head"><p>HehNiceArt</p><span className='Close'><p onClick={toggleTerminal}>X</p></span></div>
                                <div className="Terminal-Content">
                                    <li className="Terminal-Text">An illustrator, indie game developer, Live2D artist and rigger, animator, and aspiring graphics programmer.</li>
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
            </div>
        </div>
    );
}