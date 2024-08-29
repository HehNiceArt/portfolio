import React, { useState } from "react";
import HeadText from "./Terminal";
import Terminal from "./Terminal";

export default function ParentComponent() {
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }

    return (
        <div>
            <HeadText showTerminal={showTerminal} toggleTerminal={toggleTerminal} />
            <Terminal showTerminal={showTerminal} toggleTerminal={toggleTerminal} />
        </div>
    );
}
