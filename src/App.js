// import Todo from "./Components/Todo";
import MyTodo from './Components/MyTodo';
import PracticeTodo from './Components/PracticeTodo';
import Form from './Components/Form';
import UseStateArray from './Components/UseStateArray';
import UseStateObject from './Components/UseStateObject';
import './index.css'

// import Counter from './Components/Counter';
// import { useDispatch } from 'react-redux';

// import MyCounter from './Components/MyCounter';

function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <PracticeTodo/> */}
      <MyTodo/>
      {/* <Form/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      
      {/* <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <br/><br/>
        <Counter/>
      <br/><br/>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button> */}

      {/* <MyCounter/> */}
      
    </div>
  );
}

export default App;
