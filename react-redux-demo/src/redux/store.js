/*
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

export default store
*/
// https://github.com/zalmoxisus/redux-devtools-extension

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux-toolkit/counter/counterSlice'
import todosSlice from '../redux-toolkit/todos/todosSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice
  }
})

export default store