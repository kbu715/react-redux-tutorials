import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  // {
  //   id: 1,
  //   text: '예시',
  //   done: false
  // } 
]

let nextId = 1

export const todosSlice = createSlice({
  name: 'todos',
  initialState, 
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload,
        done: false
      })
    },
    toggleTodo: (state, action) => {
      const idx = state.findIndex((v, i) => v.id === action.payload)
      state[idx].done = !state[idx].done 
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer