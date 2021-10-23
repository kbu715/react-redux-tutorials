import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

export default store

// https://github.com/zalmoxisus/redux-devtools-extension