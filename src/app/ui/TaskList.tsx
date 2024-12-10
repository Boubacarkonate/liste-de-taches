'use client'

import React, { useState } from "react";
import Update from "./Update";

type Task = {
  id: number;
  name: string;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = () => {
    if (taskName.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), name: taskName }]);
    setTaskName("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTask = (updatedTaskName: string) => {
    if (!editingTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? { ...task, name: updatedTaskName } : task
      )
    );
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800">Liste des tâches</h1>

      {/* Ajouter une tâche */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Liste des tâches */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
          >
            {editingTask?.id === task.id ? (
              <Update
                currentTask={task.name}
                onSave={saveTask}
                onCancel={cancelEdit}
              />
            ) : (
              <>
                <span className="text-gray-700">{task.name}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
