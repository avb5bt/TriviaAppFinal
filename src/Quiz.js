import Question from "./Question.js"

function Quiz(props) {
  
  return (<>
      <h1>Ana's Fun Quiz</h1>
      {(props.data.results).map((element)=>
      <Question 
        incorrectAnswers={element.incorrect_answers} 
        correctAnswer={element.correct_answer} 
        question={element.question}

      />)}
        
      
    </>);
}

export default Quiz;