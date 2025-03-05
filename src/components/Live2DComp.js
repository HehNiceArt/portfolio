import Choices from './Choices'
import './Modules.css'
import React, { useState, useEffect } from "react";
export default function Live2DComp() {
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }
    return (
        <div>
            <Choices first={'Live2D Rigs'} second={'Game Projects'} />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.live2d_*</span></p>
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