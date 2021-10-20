const redux = require('redux')
const createStore = redux.createStore
const combinedReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator 
function buyCake() {
  return {
    type: BUY_CAKE
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,

  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// pure function
// (previousState, action) => newState

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
  
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }
    
//     default:
//       return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }

    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    
    default:
      return state
  }
}

const rootReducer = combinedReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// store = state + reducer
const store = createStore(rootReducer, applyMiddleware(logger))


console.log('Initial state', store.getState())

// handles unregistering of listners via the function returned by subscribe(listner)
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsubscribe()

// this whole process is the essence of redux