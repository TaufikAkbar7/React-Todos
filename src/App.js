import Form from "./components/Form";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getAllTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // get All Tasks
  const getAllTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //get Task
  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Add Tasks
  const addTasks = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //Delete Task
  const deleteTasks = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    //cek apakah id yang dikirim sama dengan id yang ada di db
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  //Toggle Completed
  const toggleCompleted = async (id) => {
    const taskToggle = await getTask(id);
    const updateTask = { ...taskToggle, completed: !taskToggle.completed };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      )
    );
  };


  return (
    <div className="container mt-4">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <Form onAdd={addTasks} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onToggle={toggleCompleted}
            onDelete={deleteTasks}
          />
        ) : (
          <p className="text-gray-400 text-opacity-75 text-center mt-4 text-xl">
            No tasks
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
