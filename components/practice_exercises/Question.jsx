"use client";

import { useState } from "react";

function Question({ questions }) {
  const [correct_answer, setCorrectAnswer] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [showQuestionExplanation, setShowQuestionExplanation] = useState(false);

  const handleAnswer = (e) => {
    console.log(e.target.value);
  };

  const showExplanation = (id) => {
    const selectedQuestion = questions.find(
      (question) => question.question_id === id,
    );

    console.log(selectedQuestion);

    setCurrentQuestion(id);
    setIsSelected(false);
    setShowQuestionExplanation(!showQuestionExplanation);
    setExplanation(selectedQuestion.explanation);
  };

  const checkCorrectAnswer = (id) => {
    const selectedQuestion = questions.find(
      (question) => question.question_id === id,
    );

    setCurrentQuestion(id);
    setShowQuestionExplanation(false);
    setIsSelected(!isSelected);
    setCorrectAnswer(selectedQuestion.correct_answer);
  };

  return (
    <div className="h-screen overflow-x-auto">
      {questions.length > 0 ? (
        questions.map((question, index) => {
          return (
            <div
              key={question.question_id}
              className="border border-blue-100 mb-5 p-5 rounded-md "
            >
              <p>
                <span className="font-bold mr-2">{index + 1}.</span>
                {question.question_text}
              </p>
              <ul>
                {question.options ? (
                  question.options.map((option) => {
                    return (
                      <li key={question.question_id}>
                        <input type="radio" name={question.text} />
                        {option}
                      </li>
                    );
                  })
                ) : (
                  <input
                    key={question.question_id}
                    type="text"
                    onChange={(e) => handleAnswer(e)}
                    className="border border-blue-100 mt-2  p-1 rounded-md"
                  />
                )}
              </ul>
              <div
                className={
                  currentQuestion === question.question_id && isSelected
                    ? "flex"
                    : "hidden"
                }
              >
                <div className="flex items-center space-x-2.5 border my-3 border-green-500/30 rounded-md bg-green-100 p-1 text-md text-green-600">
                  <p className="pl-3">This correct answer is: </p>
                  <div className="flex items-center space-x-1 bg-green-500 text-white border border-green-500 rounded-md px-3 py-1">
                    <p> {correct_answer}</p>
                  </div>
                </div>
              </div>
              <div
                className={
                  currentQuestion === question.question_id &&
                  showQuestionExplanation
                    ? "flex"
                    : "hidden"
                }
              >
                <div className="flex items-center space-x-2.5 border my-3 border-green-500/30 rounded-md bg-green-100 p-1 text-md text-green-600">
                  <p className="pl-3">Explanation</p>
                  <div className="flex items-center space-x-1 bg-green-500 text-white border border-green-500 rounded-md px-3 py-1">
                    <p> {explanation}</p>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 my-3 gap-2">
                <button
                  type="button"
                  className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 active:scale-95 transition hover:cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6"
                      stroke="#60A5FA"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Check Your Answer
                </button>
                <button
                  onClick={() => checkCorrectAnswer(question.question_id)}
                  type="button"
                  className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 active:scale-95 transition hover:cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.13 14.652a.553.553 0 0 1-.78-.78l4.097-4.098a.552.552 0 0 1 .78.78zM5.882 6.95l-2.11 2.887s-.402-.343-1.224-.236C1.332 9.76.816 11.167.56 11.457.295 11.639-.553 9.829.555 8.16c1.872-2.815 5.327-1.21 5.327-1.21m5.169 5.168-2.887 2.11s.343.401.236 1.224c-.16 1.216-1.566 1.731-1.856 1.988-.182.265 1.629 1.112 3.295.005 2.817-1.872 1.212-5.327 1.212-5.327m5.303-6.198c.607-1.365.616-2.753-.07-3.686l.02-.02C17.375 1.145 18.129.16 17.986.018c-.142-.142-1.126.611-2.198 1.682l-.019.02c-.931-.685-2.32-.677-3.683-.071a13.3 13.3 0 0 0 1.895 2.374 13.3 13.3 0 0 0 2.373 1.898"
                      fill="#06B6D4"
                    />
                    <path
                      d="M13.363 4.639a14.2 14.2 0 0 1-2.054-2.58 7 7 0 0 0-1.279 1.016c-1.314 1.314-6.163 7.728-6.163 7.728l.865.865 2.305-2.305a1.134 1.134 0 0 1 1.602 1.602L6.334 13.27l.865.865s6.414-4.849 7.728-6.163a7 7 0 0 0 1.018-1.283 14.2 14.2 0 0 1-2.582-2.05m-2.978 2.978A1.355 1.355 0 1 1 12.3 5.7a1.355 1.355 0 0 1-1.916 1.917"
                      fill="#06B6D4"
                    />
                  </svg>
                  Correct Answer
                </button>

                <button
                  onClick={() => showExplanation(question.question_id)}
                  type="button"
                  className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 active:scale-95 transition hover:cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6"
                      stroke="#60A5FA"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Explanation
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center min-h-120">
          <h2 className="text-gray-300 text-2xl font-light">
            Select a topic to see questions
          </h2>
        </div>
      )}
    </div>
  );
}

export default Question;
