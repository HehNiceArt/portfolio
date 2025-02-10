import React, { useState } from "react";
import Choices from "./Choices";
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        details: '',
        privacyPolicy: false
    });
    const [showTerminal, setShowTerminal] = useState(true);
    const toggleTerminal = () => {
        setShowTerminal(prev => !prev);
    }
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    return (
        <div>
            <Choices first={"Contact me"} />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.all_*</span></p>
            <div className={`Grid ${showTerminal ? 'show' : ''}`}>{ }
                {showTerminal && (
                    <>
                        <div className="contactText">
                            <p>Depending on the nature of the inquiry, I may not be able to answer your inquiry.</p>
                            <p>It may take several days to a week for a response.</p>
                        </div>
                        <div className="contactContainer">
                            <div className="contactHeader">CONTACT</div>
                            <div className="contactPanel">
                                <div className="contactContent">
                                    <p className="contactDetail">EMAIL ※</p>
                                    <input
                                        type="email"
                                        name="email"
                                        className="contactInput"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="email address"
                                    />
                                    <div className="contactDivider"></div>
                                </div>
                            </div>
                            <div className="contactPanel">
                                <div className="contactContent">
                                    <p className="contactDetail">FILE NAME ※</p>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="contactInput"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="subject"
                                    />
                                    <div className="contactDivider"></div>
                                </div>
                            </div>
                            <div className="contactPanel">
                                <div className="contactContent">
                                    <p className="contactDetail">INQUIRY DETAILS ※</p>
                                    <textarea
                                        name="details"
                                        className="contactTextarea"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        placeholder="Write here..."
                                        rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="contactText">
                            <label className="privacyLabel">
                                <input
                                    type="checkbox"
                                    name="privacyPolicy"
                                    checked={formData.privacyPolicy}
                                    onChange={handleInputChange}
                                    className="privacyCheckbox"
                                />
                                <span>I agree to the <a href="#" className="privacyLink">privacy policy</a>.</span>
                            </label>
                        </div>
                        <button className="sendButton">
                            send
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}