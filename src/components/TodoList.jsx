import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTasks } from "../Redux/store/reducers/taskReducer";

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="rounded-lg w-full max-w-md p-6 mx-auto ">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
            >
              <span className="text-gray-800">{task.title}</span>
              <button
                onClick={() => dispatch(deleteTodo(task.id))}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
