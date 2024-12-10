'use client'

import React, { useState } from "react";

type UpdateProps = {
  currentTask: string;
  onSave: (updatedTask: string) => void;
  onCancel: () => void;
};

const Update: React.FC<UpdateProps> = ({ currentTask, onSave, onCancel }) => {
  const [taskName, setTaskName] = useState<string>(currentTask);

  const handleSave = () => {
    if (taskName.trim() === "") return; 
    onSave(taskName);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        placeholder="Edit task"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default Update;
