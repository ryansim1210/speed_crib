import { ReactComponent as SvgCards } from '../svg-cards.svg';


const rendercard = (card) => {
    return (
        <svg width="100" height="150" viewBox="0 0 170 230">
              <SvgCards />
              <use xlinkHref={card} />
            </svg>
    )
}

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


export function Hands ( {hands} ) {

    return (

        <div className="card-slots-container">
            <div className="hand">
            {/* First hand of 6 slots */}
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="card-slot">
                    {rendercard(hands[index+1])}
                </div>
            ))}
            </div>
            <div className="hand">
            {/* Second hand of 6 slots */}
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="card-slot">
                    {rendercard(hands[index+7])}
                </div>
            ))}
            </div>
        </div>

    );

}