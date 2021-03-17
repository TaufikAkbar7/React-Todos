import { FaTimes } from "react-icons/fa";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div
      className={`mt-4 mx-auto p-4 rounded-lg shadow-xl border border-gray-400  ${task.completed ? 'line-through text-gray-400' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex">
        <h3 className="flex-1 text-xl">{task.name}</h3>
        
        <FaTimes
          style={{ color: "red" }}
          className="flex-shrink-0 text-2xl"
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p className="text-md">{task.day}</p>
    </div>
  );
};

export default Task;
