import Task from "./Task";

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task, i) => (
        <Task
          task={task}
          key={i}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
