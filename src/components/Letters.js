
import styled from "styled-components";

export default function Letters(props) {
  // === LOGIC ===
  const {
    currentWord: [[currentWord, withoutAccents],],
    clickedLetters: [clickedLetters, setClicked],
    guessedLetters: [, setGuessed],
    gameState: [gameState, setGameState],
    hits: [hits, setHits]
  } = props;

  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
  ];

  function displayHits(newLetter, lettersClicked, currentHits) {
    if (withoutAccents.includes(newLetter)) {
      currentHits += 1;
      setHits(currentHits);
      setGuessed(withoutAccents.map((letter, index) => lettersClicked.includes(letter) ? currentWord[index] : '_'));
    }
    if (lettersClicked.length - currentHits === 6 || currentHits === [...new Set(currentWord)].length) {
      setGameState("end");
      setGuessed(currentWord.map((letter, index) => currentWord[index]));
    }
  }

  function letterClicked(newLetter) {
    setClicked([...clickedLetters, newLetter]);
    displayHits(newLetter, [...clickedLetters, newLetter], hits);
  }

  function setDisableItem(letter) {
    if (gameState === "start" || gameState === "end")
      return true;
    else if (clickedLetters.includes(letter))
      return true;
    else
      return false;
  }

  function labelLetters(disabled, letter) {
    if (disabled && !clickedLetters.includes(letter))
      return { font: "#B8C0C8", background: "#9FAAB5", border: "#B8C0C8" };
    else if (!disabled && !clickedLetters.includes(letter))
      return { font: "#80ABC9", background: "#E1ECF4", border: "#80ABC9" }
    else if (clickedLetters.includes(letter) && withoutAccents.includes(letter))
      return { font: "#6DBC69", background: "#95EA91", border: "#6DBC69" };
    else
      return { font: "#BF362F", background: "#EA625B", border: "#BF362F" };
  }

  // === UI ===
  return (
    <Keyboard>
      <div>
        {alphabet.map((letter, index) => (
          <Letter
            key={index}
            onClick={() => letterClicked(letter)}
            disabled={setDisableItem(letter)}
            colorLabel={labelLetters(setDisableItem(letter), letter)}
          >
            {letter}
          </Letter>
        ))}
      </div>
    </Keyboard>
  );
}

const Keyboard = styled.section`
  max-width: 650px;
  width: 90%;
  margin: 20px 0px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Letter = styled.button`
  font-family: 'Ubuntu', sans-serif;
  width: 40px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: ${props => props.colorLabel.font};
  border: 2px solid ${props => props.colorLabel.border};
  background-color: ${props => props.colorLabel.background};
  transition-duration: 0.3s;
  border-radius: 5px;
  &:hover {
    color: ${props => { if (!props.disabled) return "#FFFFFF" }};
    background-color: ${props => { if (!props.disabled) return props.colorLabel.border }};
  }
`;