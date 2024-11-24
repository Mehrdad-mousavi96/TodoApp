import { Provider } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { store } from "./Redux/store/store";


const App = () => {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
};

export default App;
