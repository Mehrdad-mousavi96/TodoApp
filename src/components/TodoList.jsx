import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Redux/store/reducers/taskSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.todoStore.tasks);
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg w-full max-w-md p-6 mx-auto ">
      {tasks.map((task) => (
        <ul key={task.id} className="space-y-2">
          <li className="flex items-center justify-between bg-gray-100 px-4 py-2 m-2 rounded-lg">
            <span className="text-gray-800">{task.title}</span>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
