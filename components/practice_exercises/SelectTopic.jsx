"use client";
import React from "react";

function SelectTopic({ topic, handleSelectTopic }) {
  return (
    <p
      key={topic.topic_id}
      className="hover:underline hover:text-blue-500 hover:cursor-pointer "
      onClick={() => handleSelectTopic(topic.topic_id)}
    >
      <span className="mr-1">{topic.chapter_number}.</span>
      <span>{topic.topic_name}</span>
    </p>
  );
}

export default SelectTopic;
