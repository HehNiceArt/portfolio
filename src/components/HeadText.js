import React from "react";
import Draggable from "react-draggable";
import './HeadText.css'

export default function HeadText() {
    return (
        <div>
            <div className="Head-Container">
                <p className="Head-Text">Who Is Nice?</p>
                <p className="Head-Show"><span className="slash">/</span><span className="blink">show.terminal_*</span></p>
            </div>
            <div className="DragDiv">
                <Draggable>
                    <div className="Terminal-Container">
                        <div className="Terminal-Head"><p>HehNiceArt</p><span className="Close"><p>X</p></span></div>
                        <div className="Terminal-Content">
                            <li className="Terminal-Text">An illustrator, indie game developer, Live2D artist and rigger, animator, and aspiring graphics programmer.</li>
                            <li className="Terminal-Text">An artist that creates world/s using his own technical skills.</li>
                            <li className="Terminal-Text">Likes to dabble in multiple disciplines of arts and programming, from illustrations to animations, web development to game development.</li>
                            <li className="Terminal-Text">Loves algorithms such as Cellular Automata, Wave Function Collapse, and Lindenmayer System.</li>
                            <div className="Lindenmayer">
                                <li className="Terminal-Text">Fact: The Lindenmayer System is the very first algorithm tha HehNiceArt have implemented in a college finals submission.</li>
                            </div>
                            <li className="Terminal-Text"><p className="blink">___</p></li>
                        </div>
                    </div>
                </Draggable>
            </div>
        </div>
    );
}