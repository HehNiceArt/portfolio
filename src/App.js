import './App.css';
import NavigationBar from './components/Navbar';
import Content from './components/Content';
import News from './components/News'
import YearWorks from './components/YearWorks';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
      <News />
      <YearWorks />
    </div>
  );
}
export default App; 
