import React from "react";
import './HeadText.css'

const Choices = ({ first, second, third }) => {
    const shouldRenderFirst = !(second && third);

    return (
        <div className="Head-Container">
            <div className="Head-TextContainer">
                {shouldRenderFirst && (
                    <p className="Head-Text" tabIndex="0" aria-label={first} onClick={() => console.log(first)}>
                        {first}
                    </p>
                )}
                <p className="Head-TextNot" tabIndex="0" aria-label={second} onClick={() => console.log(second)}>
                    {second}
                </p>
                <p className="Head-TextThird" tabIndex="0" aria-label={third} onClick={() => console.log(third)}>
                    {third}
                </p>
            </div>
        </div>
    );
}

export default Choices;