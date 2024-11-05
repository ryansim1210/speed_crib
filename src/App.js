import logo from './logo.svg';
import './App.css';
import { ReactComponent as SvgCards } from './svg-cards.svg';

import Draggable from 'react-draggable'; // Import the Draggable component
import { useState, useEffect } from 'react';
import Deck from './cards/deck'
import { Hands, dealHands, allCards, shuffleCards} from './cards/hands';


function App() {

  const [numCards, setNumCards] = useState(52)

  const [cards, setCards] = useState([])

  const [handsDealt, setHandsDealt] = useState({})

  const [isButtonVisible, setIsButtonVisible] = useState(true); // State to manage button visibility

  const [isNextHand, setIsNextHand] = useState(false);

  const [newHand, setNewHand] = useState(false);

  const [selectingKitty, setSelectingKitty] = useState(false);

    // Shuffle cards and set them only once when the component mounts
    useEffect(() => {
        const shuffledCards = shuffleCards(allCards);  
        setCards(shuffledCards);
    }, []); // Empty dependency array means this runs only once

    const handlePlayClick = () => {
        if (numCards < 12) {
            alert('Not enough cards to deal!');
            return;
        }
        setHandsDealt(dealHands(cards)); // Deal hands from the shuffled cards
        setNumCards(prevNum => prevNum - 12); // Decrease number of cards by 12
        setIsButtonVisible(false);
        setNewHand(true);
        setSelectingKitty(true);
    };

    const handleNextHand = () => {
      if (numCards < 12) {
        alert('Not enough cards to deal!');
        return;
      }
      setHandsDealt(dealHands(cards)); // Deal hands from the shuffled cards
      setNumCards(prevNum => prevNum - 12); // Decrease number of cards by 12
      setIsNextHand(false);
      setNewHand(true);
      setSelectingKitty(true);
    }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="ace-of-spades" /> */}

        {isButtonVisible && ( // Conditionally render the button
          <button className="play-button" onClick={handlePlayClick}>
              Play
          </button>
        )}
        {selectingKitty && (
          <div className="instruction-text">
            Please select cards for the Kitty. You must select 2 cards from each hand.
          </div>
        )
        }
        {isNextHand && ( // Conditionally render the button
          <button className="play-button" onClick={handleNextHand}>
              Deal Next Hand
          </button>
        )}
        <Hands hands={handsDealt} setHands={setHandsDealt} setIsNextHand={setIsNextHand} newHand={newHand} setNewHand={setNewHand} selectingKitty={selectingKitty} setSelectingKitty={setSelectingKitty}/>

        <div className="deck-wrapper">
          <Deck cardsLeft={numCards} />
        </div>
      </header>
    </div>
  );
}

export default App;
