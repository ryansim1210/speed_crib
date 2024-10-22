import logo from './logo.svg';
import './App.css';
import { ReactComponent as SvgCards } from './svg-cards.svg';

import Draggable from 'react-draggable'; // Import the Draggable component
import { useState } from 'react';
import Deck from './cards/deck'



function App() {

  const handlePlayClick = () => {
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

        <button className="play-button" onClick={handlePlayClick}>
          Play
        </button>

        <div className="card-slots-container">
          <div className="hand">
            {/* First hand of 6 slots */}
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="card-slot"></div>
            ))}
          </div>
          <div className="hand">
            {/* Second hand of 6 slots */}
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="card-slot"></div>
            ))}
          </div>
        </div>

        <div className="deck-wrapper">
          <Deck cardsLeft={numCards} />
        </div>
      </header>
    </div>
  );
}

export default App;
