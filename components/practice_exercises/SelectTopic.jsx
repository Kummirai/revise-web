import React from "react";

function SelectTopic({ topic }) {
  return (
    <p
      key={topic.topic_id}
      className="hover:underline hover:text-blue-500 hover:cursor-pointer  "
    >
      <span className="mr-1">{topic.chapter_number}.</span>
      <span>{topic.topic_name}</span>
    </p>
  );
}

export default SelectTopic;
