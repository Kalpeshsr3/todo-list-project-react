// import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { increment,decrement } from '../ReduxToolkit/Counter/CounterSlice';

// const MyCounter = () => {
//     //this file is related with redux-toolkit

//     const newCount = useSelector((state)=> state.counter.value)
//     console.log(newCount);
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <button onClick={()=>dispatch(increment())}>Increment</button>
//         <br/><br/>
//         <h1>MyCounter value:{newCount}</h1>
//         <button onClick={()=>dispatch(decrement())}>Decrement</button>
//         <br/><br/>
//     </div>
//   )
// }

// export default MyCounter

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../ReduxToolkit/Counter/CounterSlice'


const MyCounter = () => {
  const newValue = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=>dispatch(increment())}> Increment </button>
      <br/><br/>
      <h1>MyCounter : {newValue}</h1>
      <button onClick={()=>dispatch(decrement())}> Decrement </button>
      <br/><br/>
    </>
  )
}

export default MyCounter