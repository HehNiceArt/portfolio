import './App.css';
import NavigationBar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className='Navbar'>
        <NavigationBar />
      </header>
      <body>
        <Content />
      </body>
    </div>
  );
}
export default App; 
