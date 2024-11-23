import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/store/reducers/taskReducer";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitAddTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask('')
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        To-Do App
      </h1>

      <form onSubmit={submitAddTask} className="flex items-center mb-4">
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          placeholder="Add a new task"
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
