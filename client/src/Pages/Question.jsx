import React, { useState } from 'react';
import questionData from '../data/questionData.json';
const questions = questionData.questions; 

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You've reached the end of the quiz!");
    }
  };

  // Check if questions array is empty
  if (!questions || questions.length === 0) {
    return <div>Error: No questions available</div>;
  }

  // Check if the currentQuestionIndex is valid
  if (currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) {
    return <div>Error: Invalid question index</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-600 via-turquoise to-sky-600'>
      <div>
        <div id="question" className="text-white font-bold text-xl mb-4">
          {currentQuestion.question}
        </div>
        <div id="options" className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="text-white bg-gray-800 p-2 rounded-md">
              {option}
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-md"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Question;