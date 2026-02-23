"use client";
import React, { useEffect, useState } from "react";
import SelectTopic from "@/components/practice_exercises/SelectTopic";
import Question from "@/components/practice_exercises/Question";

function page({ params, searchParams }) {
  const { id } = React.use(params);

  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);

  // const handleSelectTopic = async (id) => {
  //   const response = await fetch(`http://localhost:3000/api/questions/${id}`);
  //   const data = await response.json();
  //   setQuestions(data.questions);
  // };

  useEffect(() => {
    const getTopics = async () => {
      const response = await fetch(
        `http://localhost:3000/api/exercises/topics/${parseInt(id)}`,
      );
      const data = await response.json();
      console.log(data);

      setTopics(data.topics);
    };
    getTopics();
  }, [id]);

  return (
    <div className="px-15 py-5">
      <div className="flex flex-1 ">
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col grow  overflow-y-auto bg-white">
            <div className="flex flex-col flex-1 px-3 mt-6">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2 h-screen grid grid-cols-1">
                  {topics.length > 0 ? (
                    topics.map((topic) => {
                      return (
                        <SelectTopic
                          key={topic.topic_id}
                          topic={topic}
                          handleSelectTopic={handleSelectTopic}
                        />
                      );
                    })
                  ) : (
                    <div className="flex flex-col items-center justify-around">
                      <span className="loading loading-spinner text-primary"></span>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span className="loading loading-spinner text-accent"></span>
                    </div>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          {/* <main>
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {!questions ? (
                  <div>No topic selected yet</div>
                ) : (
                  <Question questions={questions} />
                )}
              </div>
            </div>
          </main> */}
        </div>
      </div>
    </div>
  );
}

export default page;
