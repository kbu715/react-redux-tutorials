import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux-toolkit/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch()

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div>
      <div>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <input type="text" value={amount} onChange={handleAmount} />
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(Number(amount) ?? 0))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  )
}