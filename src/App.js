import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js';
import axios from 'axios';
import {useState} from "react"
import TextField from '@mui/material/TextField'

function App() {
  const items = {
    response_code: 0,
    results: [
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
        correct_answer: "Richard Branson",
        incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What does a funambulist walk on?",
        correct_answer: "A Tight Rope",
        incorrect_answers: ["Broken Glass", "Balls", "The Moon"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "In past times, what would a gentleman keep in his fob pocket?",
        correct_answer: "Watch",
        incorrect_answers: ["Money", "Keys", "Notebook"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the largest organ of the human body?",
        correct_answer: "Skin",
        incorrect_answers: ["Heart", "large Intestine", "Liver"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
        correct_answer: "Subscriber",
        incorrect_answers: ["Single", "Secure", "Solid"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Which American president appears on a one dollar bill?",
        correct_answer: "George Washington",
        incorrect_answers: [
          "Thomas Jefferson",
          "Abraham Lincoln",
          "Benjamin Franklin",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is &quot;dabbing&quot;?",
        correct_answer: "A dance",
        incorrect_answers: ["A medical procedure", "A sport", "A language"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the Spanish word for &quot;donkey&quot;?",
        correct_answer: "Burro",
        incorrect_answers: ["Caballo", "Toro", "Perro"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which American-owned brewery led the country in sales by volume in 2015?",
        correct_answer: "D. G. Yuengling and Son, Inc",
        incorrect_answers: [
          "Anheuser Busch",
          "Boston Beer Company",
          "Miller Coors",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
        correct_answer: "Truth",
        incorrect_answers: ["Answer", "Cause", "Source"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the name of Poland in Polish?",
        correct_answer: "Polska",
        incorrect_answers: ["Pupcia", "Polszka", "P&oacute;land"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Which restaurant&#039;s mascot is a clown?",
        correct_answer: "McDonald&#039;s",
        incorrect_answers: ["Whataburger", "Burger King", "Sonic"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "What was the first ever London Underground line to be built?",
        correct_answer: "Metropolitan Line",
        incorrect_answers: ["Circle Line", "Bakerloo Line", "Victoria Line"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of the following card games revolves around numbers and basic math?",
        correct_answer: "Uno",
        incorrect_answers: ["Go Fish", "Twister", "Munchkin"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Which sign of the zodiac comes between Virgo and Scorpio?",
        correct_answer: "Libra",
        incorrect_answers: ["Gemini", "Taurus", "Capricorn"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is Tasmania?",
        correct_answer: "An Australian State",
        incorrect_answers: [
          "A flavor of Ben and Jerry&#039;s ice-cream",
          "A Psychological Disorder",
          "The Name of a Warner Brothers Cartoon Character",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which of the following is the IATA code for Manchester Airport?",
        correct_answer: "MAN",
        incorrect_answers: ["EGLL", "LHR", "EGCC"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the Zodiac symbol for Gemini?",
        correct_answer: "Twins",
        incorrect_answers: ["Fish", "Scales", "Maiden"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What zodiac sign is represented by a pair of scales?",
        correct_answer: "Libra",
        incorrect_answers: ["Aries", "Capricorn", "Sagittarius"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "The likeness of which president is featured on the rare $2 bill of USA currency?",
        correct_answer: "Thomas Jefferson",
        incorrect_answers: [
          "Martin Van Buren",
          "Ulysses Grant",
          "John Quincy Adams",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
        correct_answer: "Slacking",
        incorrect_answers: ["Smoking", "Stealing", "Cheating"],
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
          "Foie gras is a French delicacy typically made from what part of a duck or goose?",
        correct_answer: "Liver",
        incorrect_answers: ["Heart", "Stomach", "Intestines"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Who is the author of Jurrasic Park?",
        correct_answer: "Michael Crichton",
        incorrect_answers: [
          "Peter Benchley",
          "Chuck Paluhniuk",
          "Irvine Welsh",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is not an Ivy League University?",
        correct_answer: "Stanford",
        incorrect_answers: [
          "University of Pennsylvania",
          "Harvard",
          "Princeton",
        ],
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
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question:
          "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
        correct_answer: "Swiss Air",
        incorrect_answers: ["Air France", "British Airways", "TWA"],
      },
    ],
  };
  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Quiz data={items}/>
    </div>
  );
}

export default App;
