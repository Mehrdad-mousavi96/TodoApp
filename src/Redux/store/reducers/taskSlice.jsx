import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = updatedTitle; // Update the title
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTask, deleteTask, editTask } = todoSlice.actions;
