/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { nanoid } from 'nanoid';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        date: new Date(),
        title: action.payload.task,
        done: false,
      };
      state.push(newTask);
    },
    toggleMarkAsDone: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      return produce(state, (draft) => {
        draft[index].done = !draft[index].done;
      });
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      return produce(state, (draft) => {
        draft[index].title = action.payload.title;
      });
    },
    deleteTask: (state, action) => state.filter((item) => item.id !== action.payload.id),
  },
});

export const {
  addTask, deleteTask, editTask, toggleMarkAsDone,
} = tasksSlice.actions;

export default tasksSlice.reducer;
