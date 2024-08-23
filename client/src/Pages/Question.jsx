import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import questionData from "../data/questionData.json";

const questions = questionData.questions;

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [`question ${currentQuestionIndex + 1}`]: option,
    });
  };

  const handleSubmit = async () => {
    const responseJSON = JSON.stringify(selectedAnswers);

    try {
      const response = await fetch('https://your-backend-api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: responseJSON,
      });

      if (response.ok) {
        console.log('Quiz responses submitted successfully');
      } else {
        console.error('Failed to submit quiz responses');
      }
    } catch (error) {
      console.error('Error submitting quiz responses:', error);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      handleSubmit();
      navigate('/home');  // Redirect to homepage after quiz completion
    }
  };

  if (!questions || questions.length === 0) {
    return <div className="text-center text-white">Error: No questions available</div>;
  }

  if (currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) {
    return <div className="text-center text-white">Error: Invalid question index</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (quizCompleted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-600 via-turquoise to-sky-600 px-4">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p>Your responses have been submitted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-600 via-turquoise to-sky-600 px-4 py-8">
      <div className="w-full max-w-md p-4 sm:p-6 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
          Questions for GenZ
        </h1>
        <div id="question" className="text-gray-300 font-bold text-lg sm:text-xl mb-4">
          {currentQuestion.question}
        </div>
        <div id="options" className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`p-2 sm:p-3 rounded-md cursor-pointer transition-colors duration-200 text-sm sm:text-base ${
                selectedAnswers[`question ${currentQuestionIndex + 1}`] ===
                option
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`mt-4 sm:mt-6 px-4 py-2 rounded-md w-full text-sm sm:text-base ${
            selectedAnswers[`question ${currentQuestionIndex + 1}`]
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedAnswers[`question ${currentQuestionIndex + 1}`]}
        >
          {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
        </button>
        <div className="mt-4 text-gray-400 text-sm sm:text-base">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
};

export default Question;
