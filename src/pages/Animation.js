import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Choices from '../components/Choices'

export default function Animation() {
    return (
        <div>
            <Navbar />
            <Choices first={"Animation"} second={"Illustration"} />
            <Footer />
        </div>
    );
}