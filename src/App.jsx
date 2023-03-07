import { useState } from 'react'
import './App.css'

const questionsAnswers = {
  1: {
    question: "What are the two types of I/O devices?",
    answer: "Block and character devices",
  },
  2: {
    question: "How does memory-mapped I/O help with reading/writing registers with C?",
    answer: "I/O with MMI/O can be addressed as a variable in C since it is just in memory.",
  },
  3: {
    question: "Why does MMI/O not need special protection mechanisms?",
    answer:"The OS can just not put the portion of memory containing the control registers in any user’s virtual address space.",
  },
  4: {
    question: "How does MMI/O have compatibility between memory and control register instructions?",
    answer: "Every instruction that accesses memory can also access I/O",
  },
  5: {
    question: "What two elements are needed to implement R-Format ALU operations?",
    answer: "Register file and ALU",
  },
  6: {
    question: "What happens when a process needs to grow in the heap but is next to a process that is blocking the space it needs?",
    answer: "The first process must be suspended until space is freed; or it is killed",
  },
  7: {
    question: "How does room for growth of a process work in a data segment with a heap and a stack?",
    answer: "The process’ heap grows upwards and the stack grows downwards and the area in-between is the room for growth.",
  },
  8: {
    question: "Which physical component maps virtual addresses to physical addresses?",
    answer: "Memory Management Unit (MMU)",
  },
  9: {
    question: "What are the units in virtual memory and their corresponding unit in physical memory called?",
    answer:"Pages and page frames.",
  },
  10: {
    question:"What bit keeps track of which pages are physically present in memory?",
    answer: "Present/absent bit",
  }
}

const deckLength = Object.keys(questionsAnswers).length;

const App = () => {
  const [prevNumber, setPrev] = useState(1);

  const [questionNumber, setNumber] = useState(1);

  const [isFront, setFront] = useState(true);
  
  const handleClick = () =>{
    setFront(!isFront);
    const container = document.querySelector(".flashcardContainer");
    container.classList.toggle("flipped");
  }
  
  const nextQuestion = () => {
    let randIndex;
    do{
      randIndex = Math.floor(Math.random() * deckLength) + 1;
    }while (randIndex === questionNumber);

    setPrev(questionNumber)
    const container = document.querySelector(".flashcardContainer");
    container.classList.remove("flipped");
    setNumber(randIndex);
    setFront(true);
  }

  const prevQuestion = () =>{
      setNumber(prevNumber)
  }

  return (
    <div className="App">
      <h1>Operating Systems Review</h1>
      <h2>Number of cards: {deckLength}</h2>
      <h3>Test your knowledge on memory, I/O and instruction processing!</h3>

      <div className="flashcardContainer" onClick={handleClick}>
        {isFront ? (
          <div className='flashcardQuestion'>
            {questionsAnswers[questionNumber].question}
          </div>
        ) : (
          <div className='flashcardAnswer'>
            {questionsAnswers[questionNumber].answer}
           </div>
        )}
      </div>
      <div className="btnContainer">
        <div className="previousBtn">
          <button className="navBtn" onClick={prevQuestion}>←</button>
        </div>
        <div className="nextBtn">
          <button className="navBtn" onClick={nextQuestion}>→</button>
        </div>
      </div>
    </div>
  )
}

export default App
