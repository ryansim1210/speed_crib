import { ReactComponent as SvgCards } from '../svg-cards.svg';

import Draggable from 'react-draggable'; // Import the Draggable component
import { useState } from 'react';


function Deck ( {cardsLeft} ) {

    return (

            <svg width="100" height="150" viewBox="0 0 170 230">
              <SvgCards />
              <use xlinkHref='#back' />
              <text 
                x="50" 
                y="230" 
                fontSize="35" 
                fill="red"         // Change the text color to red
                fontFamily="Arial" // Set custom font to Arial (you can change this to any available font)
                fontWeight="bold"  // Make the text bold (optional)
                > 
                {cardsLeft} / 52 
                </text>
            </svg>

    );

}

export default Deck