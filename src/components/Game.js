import styled from "styled-components";
import words from "./words";
import gallow0 from "../assets/images/forca0.png";
import gallow1 from "../assets/images/forca1.png";
import gallow2 from "../assets/images/forca2.png";
import gallow3 from "../assets/images/forca3.png";
import gallow4 from "../assets/images/forca4.png";
import gallow5 from "../assets/images/forca5.png";
import gallow6 from "../assets/images/forca6.png";
import React from "react";

const images = [gallow0, gallow1, gallow2, gallow3, gallow4, gallow5, gallow6];


export default function Game(props) {
  // === LOGIC ===
  const {
    currentWord: [currentWord, setWord],
    clickedLetters: [clickedLetters, setClicked], 
    guessedLetters: [guessedLetters, setGuessed],
    initialState: [initialState, setInitial]
  } = props;

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function drawWord() {
    const word = words[getRandom(words.length)].split("");
    const guessed = word.map(() => '_');
    setWord(word);
    setGuessed(guessed);
    setInitial(false);
    setClicked([]);
  }

  // === UI ===
  return (
    <GameDisplay>
      <Scoreboard>
        <img src={gallow6} />
      </Scoreboard>
      <WordDisplay>
        <button onClick={drawWord}>SORTEAR NOVA PALAVRA</button>
        <ul>
          {guessedLetters.map((letter, index) => (
            <Letter key={index}>{letter}</Letter>
          ))}
        </ul>
      </WordDisplay>
    </GameDisplay>
  );
}

const GameDisplay = styled.section`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Scoreboard = styled.figure`
  width: auto;
  min-width: 200px;
  margin: 20px auto;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const WordDisplay = styled.section`
  width: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    font-family: 'Ubuntu', sans-serif;
    max-width: 100%;
    min-width: 100px;
    min-height: 45px;
    margin: 20px auto;
    padding: 15px;
    font-size: 17px;
    color: #27AE60;
    background-color: #AAFFCC;
    border: 2px solid #27AE60;
    border-radius: 10px;
    transition-duration: 0.4s;
    &:hover {
      color: white;
      background-color: #27AE60;
    }
  }

  ul {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Letter = styled.li`
  font-family: 'Ubuntu', sans-serif;
  width: 40px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF; 
  background-color: #606060; //#E1ECF4
  border-radius: 5px;
`;