
import styled from "styled-components";

export default function Letters(props) {
  // === LOGIC ===
  const {
    currentWord: [currentWord, setWord],
    clickedLetters: [clickedLetters, setClicked], 
    guessedLetters: [guessedLetters, setGuessed],
    initialState: [initialState, setInitial]
  } = props;

  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
  ];

  function letterClicked(newLetter) {
    const letters = [...clickedLetters, newLetter];
    setClicked(letters);
    setGuessed(currentWord.map(letter => letters.includes(letter) ? letter.toUpperCase() : '_'));
  }

  // === UI ===
  return (
    <Keyboard>
      <div>
        {alphabet.map((letter, index) => (
          <Letter 
            key={index} 
            onClick={() => letterClicked(letter)}
            disabled={clickedLetters.includes(letter) || initialState}
          >
            {letter.toUpperCase()}
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
  color: #80848A;
  border: 2px solid #27AE60;
  background-color: ${props => props.disabled ? "#9FAAB5" : "#E1ECF4"};
  border-radius: 5px;
`;