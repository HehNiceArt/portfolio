import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContentBody from '../components/Content';
import NewsBar from '../components/News';
import YearWorks from '../components/YearWorks';

export default function Home() {
    return (
        <div className='App'>
            <Navbar />
            <ContentBody />
            <NewsBar />
            <YearWorks />
            <Footer />
        </div>
    );
}