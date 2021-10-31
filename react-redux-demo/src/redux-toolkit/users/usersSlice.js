import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    // return await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
    return await axios.get('https://jsonplaceholder.typicode.com/users').then(res=>res.data)
  }
)

const initialState = {
  users: [],
  status: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'success'
      state.users = action.payload
    },
    [getUsers.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export default usersSlice.reducer