import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Illust from '../components/illust';
import Choices from '../components/Choices';

export default function Illustration() {
    return (
        <div>
            <Navbar />
            <Choices first={"Illustration"} second={"Animation"} />
            <Illust />
            <Footer />
        </div>
    );
}