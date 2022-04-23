import QuestionPhrase from "./QuestionPhrase.js"
import MultipleChoice from "./MultipleChoice.js"

function Question(props) {
  return (<>
    <h2>{<QuestionPhrase question={props.question}/>}</h2>
    {<MultipleChoice 
      incorrectAnswers={props.incorrectAnswers} 
      correctAnswer={props.correctAnswer} 
    />}
    </>);
}

export default Question;