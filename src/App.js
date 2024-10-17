import logo from './logo.svg';
import './App.css';
import { ReactComponent as SvgCards } from './svg-cards.svg';

import Draggable from 'react-draggable'; // Import the Draggable component



function App() {

  const handleCardClick = () => {
    alert('Card clicked!');
  };
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="ace-of-spades" /> */}
        <Draggable>
          <div onClick={handleCardClick}
            style={{
              width: '100px',
              height: '150px',
              cursor: 'pointer'
            }}> {/* Just for debugging */}
            <svg width="100" height="150" viewBox="0 0 170 230">
              <SvgCards />
              <use xlinkHref="#spade_1" />
            </svg>
          </div>
        </Draggable>
        <p>
          Speed Crib
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
