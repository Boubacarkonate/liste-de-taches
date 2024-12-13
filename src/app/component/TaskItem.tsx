import { PencilAltIcon, SaveIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

interface TaskItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    task: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editingTask: any | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditingTask: (task: any | null) => void;
    handleSaveTask: (taskId: number, updatedName: string) => void;
    handleDeleteTask: (taskId: number) => void;
  }
  
  const TaskItem = ({ task, editingTask, setEditingTask, handleSaveTask, handleDeleteTask }: TaskItemProps) => {
    return (
      <li key={task.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
        {editingTask?.id === task.id ? (
          <div className="flex items-center">
            <input
              type="text"
              value={editingTask?.name || ''}
              onChange={(e) => setEditingTask({ ...editingTask, name: e.target.value })}
              className="px-1 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <button
              onClick={() => handleSaveTask(task.id, editingTask.name)}
             
            >
              <SaveIcon className="h-5 w-5  text-white bg-green-500 hover:bg-green-600 mx-2"  />
            </button>
            <button
              onClick={() => setEditingTask(null)} // bouton pour annuler la modification
             
            >
               <XIcon className="h-5 w-5 text-white bg-gray-500  hover:bg-gray-600" />
            </button>
          </div>
        ) : (
          <>
            <span className="font-semibold">{task.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => setEditingTask(task)} // bouton pour modifier la tâche
                
              >
                <PencilAltIcon className="h-5 w-5 text-yellow-500" />
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)} // bouton pour supprimer la tâche
                
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
              </button>
            </div>
          </>
        )}
      </li>
    );
  };
  
  export default TaskItem;
  