import styled from "styled-components";
import gallow0 from "../assets/images/forca0.png";
import gallow1 from "../assets/images/forca1.png";
import gallow2 from "../assets/images/forca2.png";
import gallow3 from "../assets/images/forca3.png";
import gallow4 from "../assets/images/forca4.png";
import gallow5 from "../assets/images/forca5.png";
import gallow6 from "../assets/images/forca6.png";

const images = [gallow0, gallow1, gallow2, gallow3, gallow4, gallow5, gallow6];

export default function Game(props) {
  // === LOGIC ===
  const {
    words,
    currentWord: [[ , withoutAccents], setWord],
    clickedLetters: [clickedLetters, setClicked],
    guessedLetters: [guessedLetters, setGuessed],
    gameState: [gameState, setGameState],
    hits: [hits, setHits]
  } = props;

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function cleanUpAccents(word) {
    return (word
      .replace(/[ÀÁÂÃÄÅ]/g, "A")
      .replace(/[ÈÉÊË]/g, "E")
      .replace(/[ÌÍÎÏ]/g, "I")
      .replace(/[ÒÓÔÕÖ]/g, "O")
      .replace(/[ÙÚÛÜ]/g, "U")
      .replace("Ç", "C")
    );
  }

  function startGame() {
    const word = words[getRandom(words.length)].toUpperCase();
    const guessed = word.split('').map(() => '_');
    setHits(0);
    setWord([word.split(''), cleanUpAccents(word).split('')]);
    setGuessed(guessed);
    setGameState("playing");
    setClicked([]);
  }

  function colorLabel(letter) {
    if (gameState === "playing")
      return { font: "#FFFFFF", background: "#606060", border: "#606060" };
    if (gameState === "end") {
      if (clickedLetters.length - hits === 6) {
        if (clickedLetters.includes(cleanUpAccents(letter)))
          return { font: "#BF362F", background: "#EA625B", border: "#6DBC69" };
        else
          return { font: "#BF362F", background: "#EA625B", border: "#606060" };
      } else {
        return { font: "#6DBC69", background: "#95EA91", border: "#6DBC69" };
      }
    }
    if (gameState === "end-guess") {
      if (hits === [...new Set(withoutAccents)].length)
        return { font: "#6DBC69", background: "#95EA91", border: "#6DBC69" };
      else
        return { font: "#BF362F", background: "#EA625B", border: "#BF362F" };
    }
  }

  function setImage() {
    if (gameState === "end-guess") {
      if (hits !== [...new Set(withoutAccents)].length)
        return images[images.length - 1];
    }
    return images[clickedLetters.length - hits];
  }

  // === UI ===
  return (
    <GameDisplay>
      <Scoreboard>
        <img
          src={setImage()}
          alt={`Errou ${clickedLetters.length - hits} vezes`}
          data-identifier="game-image"
        />
      </Scoreboard>
      <WordDisplay>
        <button
          onClick={startGame}
          data-identifier="choose-word"
        >
          SORTEAR NOVA PALAVRA
        </button>
        <ul data-identifier="word">
          {guessedLetters.map((letter, index) => (
            <Letter
              key={index}
              colorLabel={colorLabel(letter)}
            >
              {letter}
            </Letter>
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
  color: ${props => props.colorLabel.font}; 
  background-color: ${props => props.colorLabel.background}; 
  border: 2px solid ${props => props.colorLabel.border};
  border-radius: 5px;
`;