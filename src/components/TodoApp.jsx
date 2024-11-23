const TodoApp = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        To-Do App
      </h1>

      <form className="flex items-center mb-4">
        <input
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

      {/* لیست وظایف */}
      <ul className="space-y-2">
        <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
          <span className="text-gray-800"></span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoApp;
