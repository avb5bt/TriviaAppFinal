import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    response_code: 0,
    results: [
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "How would one say goodbye in Spanish?",
        correct_answer: "Adi&oacute;s",
        incorrect_answers: [" Hola", "Au Revoir", "Salir"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of these colours is NOT featured in the logo for Google?",
        correct_answer: "Pink",
        incorrect_answers: ["Yellow", "Blue", "Green"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Which candy is NOT made by Mars?",
        correct_answer: "Almond Joy",
        incorrect_answers: ["M&amp;M&#039;s", "Twix", "Snickers"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "In which fast food chain can you order a Jamocha Shake?",
        correct_answer: "Arby&#039;s",
        incorrect_answers: ["McDonald&#039;s", "Burger King", "Wendy&#039;s"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "When someone is inexperienced they are said to be what color?",
        correct_answer: "Green",
        incorrect_answers: ["Red", "Blue", "Yellow"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "The Flag of the European Union has how many stars on it?",
        correct_answer: "12",
        incorrect_answers: ["10", "14", "16"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "When one is &quot;envious&quot;, they are said to be what color?",
        correct_answer: "Green",
        incorrect_answers: ["Red", "Blue", "Yellow"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of the following blood component forms a plug at the site of injuries?",
        correct_answer: "Platelets",
        incorrect_answers: [
          "Red blood cells",
          "White blood cells",
          "Blood plasma",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the French word for &quot;fish&quot;?",
        correct_answer: "poisson",
        incorrect_answers: ["fiche", "escargot", "mer"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "When was the Playstation 3 released?",
        correct_answer: "November 11, 2006",
        incorrect_answers: [
          "January 8, 2007",
          "December 25, 2007",
          "July 16, 2006",
        ],
      },
    ],
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
