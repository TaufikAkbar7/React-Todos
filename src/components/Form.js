import { useState } from "react";
// import "../app.css";
const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [completed, setCompleted] = useState(false);

  //submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a task");
      return;
    }

    onAdd({ name, day, completed });

    setName("");
    setDay("");
    setCompleted(false);
  };

  return (
    <form className="space-y-8 mt-4" onSubmit={onSubmit}>
      <div>
        <label className="block mb-2 font-bold text-gray-500">Task</label>
        <input
          type="text"
          className="border border-gray-200 p-3 w-full border-2 rounded outline-none"
          placeholder="What need to be done?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label className="block mb-2 font-bold text-gray-500">
          Day and Time
        </label>
        <input
          type="text"
          className="border border-gray-200 p-3 w-full border-2 rounded outline-none"
          placeholder="Insert day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <input
        type="submit"
        value="Save Task"
        className="text-white font-bold py-2 px-4 rounded bg bg-gray-700 w-100"
      />
    </form>
  );
};

export default Form;
