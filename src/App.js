import './App.css';
import NavigationBar from './components/Navbar';
import Content from './components/Content';
import News from './components/News'
import YearWorks from './components/YearWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
      <News />
      <YearWorks />
      <Footer />
    </div>
  );
}
export default App; 
