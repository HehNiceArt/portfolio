import './App.css';
import NavigationBar from './components/Navbar';
import Content from './components/Content';
import News from './components/News'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
      <News />
    </div>
  );
}
export default App; 
