import { ADD_TODO, TOGGLE_TODO } from './todosTypes'

/* 액션 생성함수 선언 */
let nextId = 1 // todo 데이터에서 사용 할 고유 id
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
})
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})