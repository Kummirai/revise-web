import React from "react";

function SelectTopic({ topic }) {
  return (
    <a
      key={topic.topic_id}
      href="#"
      title=""
      className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group"
    >
      {topic.topic_name}
    </a>
  );
}

export default SelectTopic;
