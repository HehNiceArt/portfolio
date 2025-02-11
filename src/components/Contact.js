import React, { useState, useEffect } from "react";
import Choices from "./Choices";
import emailJS from '@emailjs/browser'
import './Contact.css'
import { Link } from "react-router-dom";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        details: '',
        privacyPolicy: false
    });
    const [showTerminal, setShowTerminal] = useState(true);
    const [status, setStatus] = useState({ loading: false, error: null, success: false });
    useEffect(() => {
        let timeoutId;
        if (status.error || status.success) {
            timeoutId = setTimeout(() => {
                setStatus(prev => ({
                    ...prev,
                    error: null,
                    success: false
                }));
            }, 3000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [status.error, status.success]);

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

    useEffect(() => {
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailJS.init(publicKey);
        } else {
            console.error('EmailJS public key not found in environment variables');
        }
    }, []);
    const validateForm = () => {
        if (!formData.email || !formData.subject || !formData.details) {
            return "All fields marked with ※ are required!";
        }
        if (!formData.privacyPolicy) {
            return "Please agree to the privacy policy!";
        }
        // eslint-disable-next-line
        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
        if (!emailRegex.test(formData.email)) {
            return "Please enter a valid email address! (e.g., name@example.com)";
        }
        if (formData.subject.length < 3) {
            return "File Name must be at least 3 characters long!";
        }

        if (formData.subject.length > 200) {
            return "File name must not exceed 100 characters!";
        }

        if (formData.details.length > 1000) {
            return "Message must not exceed 1000 characters!";
        }
        return null;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setStatus({ loading: false, error, success: false });
            return;
        }
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration missing:', {
                hasServiceId: !!serviceId,
                hasTemplateId: !!templateId,
                hasPublicKey: !!publicKey
            });
            setStatus({
                loading: false,
                error: "Email service is not properly configured. Please contact HehNiceArt.",
                success: false
            });
            return;
        }

        setStatus({ loading: true, error: null, success: false });

        try {
            await emailJS.send(
                serviceId,
                templateId,
                {
                    to_name: "HehNiceArt",
                    from_name: formData.email,
                    subject: formData.subject,
                    message: formData.details,
                    reply_to: formData.email,
                },
                publicKey
            );
            setStatus({ loading: false, error: null, success: true });
            setFormData({
                email: '',
                subject: '',
                details: '',
                privacyPolicy: false
            });
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus({
                loading: false,
                error: "Failed to send message. Please try again later.",
                success: false
            });
        }
    }

    return (
        <div>
            <Choices first={"Contact me"} />
            <p className="Head-Show"><span className="slash">/</span><span className="blink" onClick={toggleTerminal}>show.all_*</span></p>
            <div className={`Grid ${showTerminal ? 'show' : ''}`}>{ }
                {showTerminal && (
                    <form onSubmit={handleSubmit}>
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
                                <span>I agree to the <Link to="/privacy-policy" className="privacyLink">privacy policy</Link>.</span>
                            </label>
                        </div>
                        {status.error && (
                            <div className="errorMessage fade">{status.error}</div>
                        )}
                        {status.success && (
                            <div className="successMessage fade">Message sent successfully! Please wait for a reply.</div>
                        )}
                        <button
                            className={`sendButton ${status.loading ? 'loading' : ''}`}
                            type="submit"
                            disabled={status.loading}
                        >
                            {status.loading ? 'sending...' : 'send'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}