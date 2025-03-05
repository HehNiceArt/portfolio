
import Choices from './Choices'
import './Modules.css'
import React, { useState } from "react";
export default function GameProjects() {
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }
    return (
        <div>
            <Choices second={'Live2D Rigs'} third={'Game Projects'} />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.game-projects_*</span></p>
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