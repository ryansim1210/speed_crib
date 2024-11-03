import { ReactComponent as SvgCards } from '../svg-cards.svg';
import { useEffect, useState } from 'react';

export const dealHands = (array) => {
    const hands = {}
    for (let i = 1; i <= 12; i++){
        hands[i] = array.shift();
    }
    return hands
}

export const shuffleCards = (array) => {
    // Create a copy of the original array to avoid mutating it
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indices i and randomIndex
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }

    return shuffledArray;
}


export const allCards = [
    '#spade_1',   // Ace of Spades
    '#spade_2',   // 2 of Spades
    '#spade_3',   // 3 of Spades
    '#spade_4',   // 4 of Spades
    '#spade_5',   // 5 of Spades
    '#spade_6',   // 6 of Spades
    '#spade_7',   // 7 of Spades
    '#spade_8',   // 8 of Spades
    '#spade_9',   // 9 of Spades
    '#spade_10',  // 10 of Spades
    '#spade_jack', // Jack of Spades
    '#spade_queen', // Queen of Spades
    '#spade_king',  // King of Spades
    '#heart_1',   // Ace of Hearts
    '#heart_2',   // 2 of Hearts
    '#heart_3',   // 3 of Hearts
    '#heart_4',   // 4 of Hearts
    '#heart_5',   // 5 of Hearts
    '#heart_6',   // 6 of Hearts
    '#heart_7',   // 7 of Hearts
    '#heart_8',   // 8 of Hearts
    '#heart_9',   // 9 of Hearts
    '#heart_10',  // 10 of Hearts
    '#heart_jack', // Jack of Hearts
    '#heart_queen', // Queen of Hearts
    '#heart_king',  // King of Hearts
    '#diamond_1',   // Ace of Diamonds
    '#diamond_2',   // 2 of Diamonds
    '#diamond_3',   // 3 of Diamonds
    '#diamond_4',   // 4 of Diamonds
    '#diamond_5',   // 5 of Diamonds
    '#diamond_6',   // 6 of Diamonds
    '#diamond_7',   // 7 of Diamonds
    '#diamond_8',   // 8 of Diamonds
    '#diamond_9',   // 9 of Diamonds
    '#diamond_10',  // 10 of Diamonds
    '#diamond_jack', // Jack of Diamonds
    '#diamond_queen', // Queen of Diamonds
    '#diamond_king',  // King of Diamonds
    '#club_1',   // Ace of Clubs
    '#club_2',   // 2 of Clubs
    '#club_3',   // 3 of Clubs
    '#club_4',   // 4 of Clubs
    '#club_5',   // 5 of Clubs
    '#club_6',   // 6 of Clubs
    '#club_7',   // 7 of Clubs
    '#club_8',   // 8 of Clubs
    '#club_9',   // 9 of Clubs
    '#club_10',  // 10 of Clubs
    '#club_jack', // Jack of Clubs
    '#club_queen', // Queen of Clubs
    '#club_king'   // King of Clubs
];


export const cardRanks = {
    '#spade_1': 1,    // Ace of Spades
    '#spade_2': 2,    // 2 of Spades
    '#spade_3': 3,    // 3 of Spades
    '#spade_4': 4,    // 4 of Spades
    '#spade_5': 5,    // 5 of Spades
    '#spade_6': 6,    // 6 of Spades
    '#spade_7': 7,    // 7 of Spades
    '#spade_8': 8,    // 8 of Spades
    '#spade_9': 9,    // 9 of Spades
    '#spade_10': 10,  // 10 of Spades
    '#spade_jack': 10,  // Jack of Spades
    '#spade_queen': 10, // Queen of Spades
    '#spade_king': 10,  // King of Spades
    '#heart_1': 1,     // Ace of Hearts
    '#heart_2': 2,     // 2 of Hearts
    '#heart_3': 3,     // 3 of Hearts
    '#heart_4': 4,     // 4 of Hearts
    '#heart_5': 5,     // 5 of Hearts
    '#heart_6': 6,     // 6 of Hearts
    '#heart_7': 7,     // 7 of Hearts
    '#heart_8': 8,     // 8 of Hearts
    '#heart_9': 9,     // 9 of Hearts
    '#heart_10': 10,   // 10 of Hearts
    '#heart_jack': 10,   // Jack of Hearts
    '#heart_queen': 10,  // Queen of Hearts
    '#heart_king': 10,   // King of Hearts
    '#diamond_1': 1,   // Ace of Diamonds
    '#diamond_2': 2,   // 2 of Diamonds
    '#diamond_3': 3,   // 3 of Diamonds
    '#diamond_4': 4,   // 4 of Diamonds
    '#diamond_5': 5,   // 5 of Diamonds
    '#diamond_6': 6,   // 6 of Diamonds
    '#diamond_7': 7,   // 7 of Diamonds
    '#diamond_8': 8,   // 8 of Diamonds
    '#diamond_9': 9,   // 9 of Diamonds
    '#diamond_10': 10, // 10 of Diamonds
    '#diamond_jack': 10, // Jack of Diamonds
    '#diamond_queen': 10, // Queen of Diamonds
    '#diamond_king': 10,  // King of Diamonds
    '#club_1': 1,    // Ace of Clubs
    '#club_2': 2,    // 2 of Clubs
    '#club_3': 3,    // 3 of Clubs
    '#club_4': 4,    // 4 of Clubs
    '#club_5': 5,    // 5 of Clubs
    '#club_6': 6,    // 6 of Clubs
    '#club_7': 7,    // 7 of Clubs
    '#club_8': 8,    // 8 of Clubs
    '#club_9': 9,    // 9 of Clubs
    '#club_10': 10,  // 10 of Clubs
    '#club_jack': 10,  // Jack of Clubs
    '#club_queen': 10, // Queen of Clubs
    '#club_king': 10   // King of Clubs
};

export function Hands ( {hands, setHands, setIsNextHand, newHand, setNewHand} ) {

    const [scoringHand, setScoringHand] = useState(null)
    const [playedCards, setPlayedCards] = useState([]); // State for storing the index of the played card
    const [lastPlayed, setLastPlayed] = useState(0);
    const [runSum, setRunSum] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [scoringCards, setScoringCards] = useState(null);

    const resetPlayedCards = () => {
        setPlayedCards([]);
        setRunSum(0);
    }

    const resetHands = () => {
        setScoringCards(null);
        setPlayedCards([]);
        setLastPlayed(0);
        setRunSum(0);
        setScoringCards(null);
    }

    function combosFromHere(nums, number) {
        console.log('hand for fifteens', nums)
        let combos = 0;
        
        if (nums.length == 1) {
          return nums[0] == number ? 1 : 0;
        }
      
        for (let i = 0; i < nums.length; i++) {
          const num = nums[i];
          if (num == number) {
            combos += 1;
          } else if (num < number) {
            combos += combosFromHere(nums.slice(i + 1), number - num);
          }
        }
        
        return combos;
      }

    const scoreHand = (hands) => {
        if (scoringHand == 1){
            let handsNums = hands.map(card => cardRanks[card]);
            const filteredHandsNums = handsNums.filter(element => element !== undefined);
            const fifteens = combosFromHere(filteredHandsNums, 15)
            setCurrentScore(currentScore => currentScore + fifteens*2);
            return (fifteens*2)
        }
        if (scoringHand == 2){
            let handsNums = hands.map(card => cardRanks[card]);
            const filteredHandsNums = handsNums.filter(element => element !== undefined);
            const fifteens = combosFromHere(filteredHandsNums, 15)
            setCurrentScore(currentScore => currentScore + fifteens*2);
            return (fifteens*2)
        }
    }

    const score = (hands, playedCards) => { // TODO: fix ranks for face cards
        if (runSum == 15){
            setCurrentScore(currentScore => currentScore + 2);
            console.log(currentScore)
        }
        if (runSum == 31){
            setCurrentScore(currentScore => currentScore + 1);
        }
        if (cardRanks[playedCards[playedCards.length - 1]] == cardRanks[playedCards[playedCards.length - 2]] && playedCards.length > 1){
            if (cardRanks[playedCards[playedCards.length - 2]] == cardRanks[playedCards[playedCards.length - 3]]){
                setCurrentScore(currentScore => currentScore + 6);
            }
            else{
                setCurrentScore(currentScore => currentScore + 2);
            }
        }
        if (playedCards.length >= 3) {
            console.log('played cards: ', playedCards)
            let highestRun = 0;

            const playedCardRanks = playedCards.map(card => cardRanks[card]);
        
            if (playedCardRanks.length >= 5) {
                const lastFive = playedCardRanks.slice(-5);
                const min = Math.min(...lastFive);
                const max = Math.max(...lastFive);
                if (max === min + 4 && new Set(lastFive).size === 5) {
                    highestRun = 5;
                }
            }
        
            if (highestRun < 4 && playedCardRanks.length >= 4) {
                const lastFour = playedCardRanks.slice(-4);
                const min = Math.min(...lastFour);
                const max = Math.max(...lastFour);
                if (max === min + 3 && new Set(lastFour).size === 4) {
                    highestRun = 4;
                }
            }
        
            if (highestRun < 3 && playedCardRanks.length >= 3) {
                const lastThree = playedCardRanks.slice(-3);
                const min = Math.min(...lastThree);
                const max = Math.max(...lastThree);
                if (max === min + 2 && new Set(lastThree).size === 3) {
                    highestRun = 3;
                }
            }
        
            setCurrentScore(currentScore => currentScore + highestRun);
        }
        
        
    }

    const go = (hands) => {

        for (let i = 1; i <= 12; i++){
            const card = cardRanks[hands[i]]
            console.log(card)
            if (card <= (31 - runSum) && card != null){
                return false;
            }
            else if (i == 12){
                resetPlayedCards();
                return true;
            }
        }
    }

    useEffect(() => {
        // Execute the code after playedCards or hands have updated
        console.log("playedCards updated:", playedCards);
        console.log("hands updated:", hands);
        console.log("currentScore updated:", currentScore);
        console.log("scoringHand updated:", scoringHand);

        const is_go = go(hands);
        console.log(playedCards)

        if (scoringHand == 1 && lastPlayed < 7 && lastPlayed > 0) {
            score(hands, playedCards)
            if (is_go){
                setCurrentScore(currentScore => currentScore + 1);
            }
        }
        if (scoringHand == 2 && lastPlayed > 7) {
            score(hands, playedCards)
            if (is_go){
                setCurrentScore(currentScore => currentScore + 1);
            }
        }

        if (playedCards.length > 0){

            console.log('hands: ', hands)
            const allValuesUndefined = Object.values(hands).every(value => value === null);

            if (allValuesUndefined) {
                const pointsFromHand = scoreHand(scoringCards)
                alert("Scored from hand: " + pointsFromHand + "!");
                
                resetHands();

                setIsNextHand(true);

            }
        }

        // Any other logic that needs to run after state updates
    }, [playedCards, lastPlayed]); // Add any other states to wait on

    const handleCardClick = (index) => {
        if (scoringHand == null){
            alert('You must select which hand you are scoring with.')
            return
        }
        if ((lastPlayed > 0 && lastPlayed < 7) && index < 7) {
            alert('You must alternate between hands when playing cards.');
        }
        else if (lastPlayed > 7 && index > 7)  {
            alert('You must alternate between hands when playing cards.');
        }
        else{
            setLastPlayed(index)
            setRunSum(runSum => runSum + cardRanks[hands[index]]);
            setPlayedCards((prev) => [...prev, hands[index]]); // Store the played card
            setHands((prevHands) => ({
            ...prevHands,
            [index]: null, // Set the played card to null
            }));
            console.log(`Card at index ${index} was played`);
            console.log(scoringHand)
            console.log(playedCards)
            console.log(currentScore)
        }        
    };
    

    const renderCard = (card, index) => {
        return (
            <div onClick={() => handleCardClick(index)} style={{ cursor: 'pointer' }}>
                <svg width="100" height="150" viewBox="0 0 170 230">
                    <use xlinkHref={card} />
                </svg>
            </div>
        );
    };

    const renderCardKitty = (card, index) => {
        return (
            <div>
                <svg width="100" height="150" viewBox="0 0 170 230">
                    <use xlinkHref={card} />
                </svg>
            </div>
        );
    };


    const handleScoreClick = (hand_number) => {
        setNewHand(false);
        setScoringHand(hand_number);
        if (hand_number == 1){
            setScoringCards(Object.values(hands).slice(0,6))
        }
        else {
            setScoringCards(Object.values(hands).slice(6))
        }
    }

    return (

        <div className="card-slots-container">
             <div className="score-display">{currentScore}</div> {/* Replace `score` with the actual score variable */}
            <div className="played-cards">
                {playedCards.map((card, index) => (
                <div key={index} className="played-card">
                    <svg width="100" height="150" viewBox="0 0 170 230">
                    <use xlinkHref={card} />
                    </svg>
                </div>
                ))}
            </div>
            <div className="hand">
            {/* First hand of 6 slots */}
            {newHand && Object.keys(hands).length > 0 && (
                <button className="score-button" onClick={() => handleScoreClick(1)}>
                Score with this Hand
                </button>
            )
            }
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="card-slot">
                    {renderCard(hands[index+1], index+1)}
                </div>
            ))}
            </div>
            <div className="hand">
            {/* Second hand of 6 slots */}
            {newHand && Object.keys(hands).length > 0 && (
                <button className="score-button" onClick={() => handleScoreClick(2)}>
                Score with this Hand
                </button>
            )
            }
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="card-slot">
                    {renderCard(hands[index+7], index+7)}
                </div>
            ))}
            </div>
            <div className="additional-hand">
                <div className="hand-label">Kitty</div>
                <div className="card-row">
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="card-slot-kitty">
                            {renderCardKitty(hands[index + 1], index + 1)}
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );

}


