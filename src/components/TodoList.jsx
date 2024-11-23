import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/store/reducers/taskReducer";

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg w-full max-w-md p-6 mx-auto ">
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
          >
            <span className="text-gray-800">{task}</span>
            <button
              onClick={() => dispatch(deleteTodo(index))}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
