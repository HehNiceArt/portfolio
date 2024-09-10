import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Choices from '../components/Choices'

export default function Animation() {
    return (
        <div>
            <Navbar />
            <Choices second={"Illustration"} third={"Animation"} />
            <Footer />
        </div>
    );
}