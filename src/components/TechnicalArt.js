import Choices from './Choices'
import './Modules.css'
import React, { useState } from "react";
export default function TechArt() {
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }
    return (
        <div>
            <Choices first={'Technical Art'} second={'World'} />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.technical-art_*</span></p>
            <div className={`Grid ${showTerminal ? 'show' : ''}`}>
                {showTerminal && (
                    <>
                        <div className='moduleParent'>
                            awad

                        </div>
                    </>
                )}
            </div>
        </div>
    )
}