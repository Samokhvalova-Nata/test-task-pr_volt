/* eslint-disable max-len */
/* eslint-disable quote-props */
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  taskList: [
    { id: 0, title: 'Task 1', description: 'Description Task 1', completed: false },
    { id: 1, title: 'Task 2', description: 'Description Task 2', completed: false },
    { id: 2, title: 'Task 3', description: 'Description Task 3', completed: false },
    { id: 3, title: 'Task 4', description: 'Description Task 4', completed: false },
    { id: 4, title: 'Task 5', description: 'Description Task 5', completed: false },
  ],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        state.taskList.push(payload)
      },
      prepare(title, description) {
        return {
          payload: {
            title,
            description,
            id: nanoid(),
            completed: false,
          },
        }
      },
    },
    deleteTask(state, { payload }) {
      const index = state.taskList.findIndex((task) => task.id === payload)
      state.taskList.splice(index, 1)
    },
    editTask(state, { payload }) {
      const index = state.taskList.findIndex((task) => task.id === payload.id)
      state.taskList.splice(index, 1, payload)
    },
    toggleCompleted(state, { payload }) {
      for (const task of state.taskList) {
        if (task.id === payload) {
          task.completed = !task.completed
          break
        }
      }
    },
  },
})

export const { addTask, deleteTask, editTask, toggleCompleted } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
