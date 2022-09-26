import styled from "styled-components";
import React from "react";

export default function Guess(props) {
  // === LOGIC ===
  const [guess, setGuess] = React.useState('');
  const {
    currentWord: [[currentWord, withoutAccents],],
    clickedLetters: [clickedLetters, setClicked],
    guessedLetters: [, setGuessed],
    gameState: [gameState, setGameState],
    hits: [, setHits]
  } = props;
  
  function cleanUpAccents(word) {
    return (word
      .replace(/[ÀÁÂÃÄÅ]/g, 'A')
      .replace(/[ÈÉÊË]/g, 'E')
      .replace(/[ÌÍÎÏ]/g, 'I')
      .replace(/[ÒÓÔÕÖ]/g, 'O')
      .replace(/[ÙÚÛÜ]/g, 'U')
      .replace('Ç', 'C')
      .replace(/[0-9]+/g, '')
    );
  }

  function checkGuess() {
    const guessWithoutAccents = cleanUpAccents(guess);
    if (currentWord.length !== guessWithoutAccents.length) {
      alert(`Não! Tente uma palavra com ${currentWord.length} letras!`);
      setGuess('');
    } else {
      if (guessWithoutAccents === withoutAccents.join('')) {
        setHits([...new Set(guessWithoutAccents.split(''))].length);
        setClicked([...new Set([...clickedLetters, ...guessWithoutAccents.split('')])]);
        setGuessed(currentWord);
        setGameState("end-guess");
        setGuess('');
      } else {
        setGuessed(currentWord)
        setGameState("end-guess");
        setGuess('');
      }
    }
  }

  function setPlaceholder(enabled) {
    return enabled ? `Palavra com ${currentWord.length} letras!` : `Sorteie uma nova palavra!`;
  }

  function labelColors(enabled) {
    return (enabled ?
      { font: "#3978A6", fontHover: "#FFFFFF", background: "#E1ECF4", border: "#3978A6" } :
      { font: "#B8C0C8", fontHover: "#B8C0C8", background: "#9FAAB5", border: "#9FAAB5" });
  }

  // === UI ===
  return (
    <GuessDisplay color={labelColors(gameState === "playing")}>
      <h1>Já sei a palavra!</h1>
      <input
        data-identifier="type-guess"
        placeholder={setPlaceholder(gameState === "playing")}
        value={guess}
        onChange={e => setGuess(e.target.value.trim().toUpperCase())}
        disabled={(gameState !== "playing")}
      />
      <button
        data-identifier="guess-button"
        onClick={checkGuess}
        disabled={(gameState !== "playing")}
      >
        CHUTAR
      </button>
    </GuessDisplay>
  );
}

const GuessDisplay = styled.section`
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    color: ${props => props.color.font};
    font-size: 20px;
    text-align: center;
    margin: 5px 0px;
  }

  input {
    font-family: 'Ubuntu', sans-serif;
    width: auto;
    min-width: 150px;
    height: 22px;
    margin: 5px 10px;
    font-size: 15px;
    text-align: center;
    line-height: 25px;
    color: ${props => props.color.font};
    border: 1px solid ${props => props.color.border};
    border-radius: 10px;

    &::placeholder { 
      padding: 7px;
      font-size: auto;
      text-align: center;
      color: ${props => props.color.font};
      opacity: .8; 
    }

    &:focus {
      color: ${props => props.color.font};
      outline: none;
      border: 3px solid ${props => props.color.border}
    }
  }

  button {
    font-family: 'Ubuntu', sans-serif;
    min-width: 80px;
    width: 150px;
    margin: 5px 0px;
    font-size: 17px;
    line-height: 25px;
    color: ${props => props.color.font};
    background-color: ${props => props.color.background};
    border: 2px solid ${props => props.color.border};
    border-radius: 10px;
    transition-duration: 0.4s;

    &:hover {
      color: ${props => props.color.fontHover};
      background-color: ${props => props.color.border};
    }
  }
`;

