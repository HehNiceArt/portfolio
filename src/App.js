import './App.css';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Head-l">
          <p>HehNiceArt</p>
        <div className="Head-r">
          <ul className='Menu-top'>
          <li className='Menu-item'>
            <div className="Item-label">
              Illustrations
            </div>
          </li>
          <li className='Menu-item'>
            <div className="Item-label">
              Animations
            </div>
            </li>
          <li className='Menu-item'>
            <div className="Item-label">
              Live2D Rigs
            </div>
            </li>
          <li className='Menu-item'>
            <div className="Item-label">
              Game Projects
            </div>
            </li>
            <li className='Menu-item'>
              <div className='Item-label'>
                World
              </div>
            </li>
            <li className='Menu-item'>
              <div className='Item-label'>
                Contact
              </div>
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
  );
}
export default App; 
