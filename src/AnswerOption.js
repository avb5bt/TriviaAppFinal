import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react"
function AnswerOption(props) {
  const [variable, setVariable] = useState(props.answer);
  return (<>
    {props.isCorrect &&
        </*Button variant="text"*/ button onClick={()=>setVariable("CORRECT")}>{variable}</button>
    }
    {!props.isCorrect && 
      </*Button variant="text"*/ button onClick={()=>setVariable("CORRECT")}>{variable}</button>
    }

    </>);}
  

  
  export default AnswerOption;