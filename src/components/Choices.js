import React from "react";
import './HeadText.css'

const Choices = ({
    first,
    second
}) => {
    return (
        <div className="Head-Container">
            <div className="Head-TextContainer">
                <p className="Head-Text">{first}</p>
                <div style={{ width: '20px' }}></div>
                <p className="Head-TextNot">{second}</p>
            </div>
        </div>
    )
}

export default Choices;