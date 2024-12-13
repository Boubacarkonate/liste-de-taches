import { PlusIcon } from '@heroicons/react/solid';
interface TaskInputProps {
    taskName: string;
    setTaskName: (taskName: string) => void;
    handleAddTask: () => void;
  }
  
  const TaskInput = ({ taskName, setTaskName, handleAddTask }: TaskInputProps) => {
    return (
      <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Entrez une tâche"
      />
      <button
        onClick={handleAddTask}
        className="flex items-center justify-center w-5 h-5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
        );
  };
  
  export default TaskInput;
  