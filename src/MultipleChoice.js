import AnswerOption from "./AnswerOption.js"

function MultipleChoice(props) {
  let answersToDisplay = [];

  answersToDisplay.push(props.correctAnswer);
  answersToDisplay.push(props.incorrectAnswers[0]);
  answersToDisplay.push(props.incorrectAnswers[1]);
  answersToDisplay.push(props.incorrectAnswers[2]);

  shuffle(answersToDisplay);
  return (<>
    {answersToDisplay.map((myAnswer) => 
    <AnswerOption 
      answer={myAnswer}
      isCorrect={myAnswer===props.correctAnswer}
    />)}
    </>);
}

function shuffle(array) {//CREDIT: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



export default MultipleChoice;