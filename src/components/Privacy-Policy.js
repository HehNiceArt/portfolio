import Choices from "./Choices";
import './Flexbox.css'

export default function PrivacyForm() {
    return (
        <div>
            <Choices first={"Privacy Policy"} />
            <p className="policy-date">Last updated: February 12, 2025 </p>
            <div className="policy-container">
                <p className="policy-title">&gt; Introduction</p>
                <p className="policy-text">This Privacy Policy explains how We collect, use, and protect your information when You use our Service. </p>
                <p className="policy-title">&gt; Personal Data We Collect</p>
                <p className="policy-text">We may collect the following Personal Data:</p>
                <p className="policy-text">- Email address</p>
                <p className="policy-text">- First name and last name</p>
                <p className="policy-title">&gt; Data Retention</p>
                <p className="policy-text">We retain Personal Data only as long as necessary for legal and business purposes.</p>
                <p className="policy-title">&gt; Data Transfers</p>
                <p className="policy-text">Your data may be stored and processed outside Your jurisdiction. We ensure appropriate safeguards for your data protection.</p>
                <p className="policy-title">&gt; Your Rights</p>
                <p className="policy-text">You can request to delete or access your data, subject to legal obligations </p>
                <p className="policy-title">&gt; Disclosure of Data</p>
                <p className="policy-text">Your data may be disclosed in the following cases:</p>
                <p className="policy-text">- Business Transactions (e.g., mergers, acquisitions)</p>
                <p className="policy-text">- Legal Compliance (e.g., law enforcement requests)</p>
                <p className="policy-text">- Protection of rights, security, and legal claims.</p>
                <p className="policy-title">&gt; Security</p>
                <p className="policy-text">We take appropriate measures to protect your data but cannot guarantee absolute security.</p>
                <p className="policy-title">&gt; Children's Privacy</p>
                <p className="policy-text">We do not knowingly collect data from children under 13. If you believe we have, please contact us.</p>
                <p className="policy-title">&gt; Third-Party Links</p>
                <p className="policy-text">We are not responsible for the privacy practices of third-party websites linked from our Service.</p>
                <p className="policy-title">&gt; Changes to This Policy</p>
                <p className="policy-text">We may update Our Privacy Policy from time to time. The revised privacy policy will become effective from the time it is displayed on this page. </p>
                <p className="policy-title">&gt; Contact Us</p>
                <p className="policy-text">For questions, contact us by email: <strong>hehniceart@gmail.com</strong></p>
            </div>
        </div>
    )
}