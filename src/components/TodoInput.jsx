import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/store/reducers/taskSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const value = useSelector((state) => state.todoStore.tasks);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addTask({
        id: value.length + 1,
        title: text,
      })
    );
    setText("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        To-Do App
      </h1>

      <form className="flex items-center mb-4" onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
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
