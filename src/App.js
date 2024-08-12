import './App.css';
import NavigationBar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className='Navbar'>
        <NavigationBar />
      </header>
      <div>
        <Content />
      </div>
    </div>
  );
}
export default App; 
