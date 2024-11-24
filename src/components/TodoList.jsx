import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../Redux/store/reducers/taskSlice";
import { useState } from "react";

const TodoList = () => {
  const tasks = useSelector((state) => state.todoStore.tasks);
  const dispatch = useDispatch();

  // State for tracking which task is being edited
  const [editingId, setEditingId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleEdit = (e, id) => {
    e.preventDefault();
    dispatch(editTask({ id, updatedTitle }));
    setEditingId(null); // Exit editing mode after saving
    setUpdatedTitle(""); // Clear the input field
  };

  return (
    <div className="rounded-lg w-full max-w-md p-6 mx-auto ">
      {tasks.map((task) => (
        <ul key={task.id} className="space-y-2">
          <li className="flex items-center justify-between bg-gray-100 px-4 py-2 m-2 rounded-lg">
            {editingId === task.id ? (
              <form onSubmit={(e) => handleEdit(e, task.id)} className="flex">
                <input
                  type="text"
                  className="border border-blue-300"
                  placeholder="Change the text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <button className="text-blue-500 hover:text-blue-600 mx-2">
                  Save
                </button>
              </form>
            ) : (
              <span className="text-gray-800">{task.title}</span>
            )}

            {/* Edit and Delete buttons */}
            <span>
              {editingId === task.id ? null : (
                <button
                  onClick={() => {
                    setEditingId(task.id); 
                    setUpdatedTitle(task.title); 
                  }}
                  className="text-blue-500 hover:text-blue-600 mx-2"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
