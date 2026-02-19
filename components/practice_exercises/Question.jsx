import React from "react";

function Question({ questions }) {
  return (
    <div className="h-screen overflow-x-auto">
      {questions.length > 0 ? (
        questions.map((question, index) => {
          return (
            <div
              key={index}
              className="border border-blue-100 mb-5 p-5 rounded-md "
            >
              <p>
                <span className="font-bold mr-2">{index + 1}.</span>
                {question.question_text}
              </p>
              <ul>
                {question.options ? (
                  question.options.map((option, index) => {
                    return (
                      <li key={index}>
                        <input type="radio" name={question.text} />
                        {option}
                      </li>
                    );
                  })
                ) : (
                  <input
                    type="text"
                    className="border border-blue-100 mt-2  p-1 rounded-md"
                  />
                )}
              </ul>
              <div>{""}</div>
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
