import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the moving animation
const moving = keyframes`
  0% {
    background-position: -100vmin 20vmin, 100vmin -25vmin;
  }
  100% {
    background-position: 100vmin 20vmin, -100vmin -25vmin;
  }
`;

// Function to generate multiple shadows
const multipleShadow = (length) => {
    let value = '2px -1px 0 #000'; // Initial shadow
    for (let i = 2; i <= length; i++) {
        const ho = i * 2; // Horizontal offset
        const vo = -(ho / 2); // Vertical offset
        const col = `hsl(0deg, 0%, ${i * 2}%)`; // Color
        value += `, ${ho}px ${vo}px 0 ${col}`;
    }
    return value;
};

// Styled component for the number
const Number = styled.div`
    background: #fff;
    position: relative; /* Assuming $rl translates to relative */
    font: 900 30vmin 'Consolas', monospace;
    letter-spacing: 5vmin;
    text-shadow: ${multipleShadow(8)};
    background-color: #673ab7;
    background-image: radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)),
                      radial-gradient(closest-side at 50% 50%, #e91e63 100%, rgba(0, 0, 0, 0));
    background-repeat: no-repeat; /* Assuming $rpx translates to no-repeat */
    background-size: 40vmin 40vmin;
    mix-blend-mode: screen;
    animation: ${moving} 10s linear infinite both;
    width: 100%;
    text-align: center; /* Assuming $c translates to center */
`;

// Styled component for the text
const Text = styled.div`
    font-family: 'Courgette', cursive; /* Make sure to import this font */
    font-weight: 400;
    font-size: 5vmin; /* Assuming $n translates to a value */

    span {
        font-size: 10vmin;
    }
`;

// Main NotFoundPage component
const NotFoundPage = () => {
    return (
        <div className="number404">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <Number className="number">404</Number>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>
    );
};

export default NotFoundPage;
