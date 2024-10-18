import logo from './logo.svg';
import './App.css';
import { ReactComponent as SvgCards } from './svg-cards.svg';

import Draggable from 'react-draggable'; // Import the Draggable component
import { useState } from 'react';
import Deck from './cards/deck'



function App() {

  const handleCardClick = () => {
    // alert('Card clicked!');
    if (numCards == 0){
      alert('Out of cards!');
    }
    else{
      setNumCards(numCards-1)
    }
  };
  

  const [numCards, setNumCards] = useState(52)

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
            <Deck cardsLeft={numCards}/>
            {/* <svg width="100" height="150" viewBox="0 0 170 230">
              <SvgCards />
              <use xlinkHref={card} />
            </svg> */}
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
