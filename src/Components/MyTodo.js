import React, { useState } from 'react'
import TodoImg from '../images/TodoImg.png';

const MyTodo = () => {
  const [data,setData] = useState("");
  const [inputVal,setInputVal] = useState([]);
  const [toggleBtn,setToggleBtn] = useState(true);
  const [isEditVal,setIsEditVal] = useState(null);

  const todoFunc = () => {
    if(!data){
      alert('please write task');
    }
    else if(data && !toggleBtn){
      setInputVal(
        inputVal.map((val)=>{
          if(val.id === isEditVal){
            return {...val,name:data}
          }
          else{
            return val;
          }
        })
      )
      setData('');
      setToggleBtn(true);
      setIsEditVal(null);
    }
    else{
      setInputVal([{id:`${data}-${Date.now()}`,name:data},...inputVal]);
    setData("");
    }
    
  }

  const editTodo = (id) => {
    // console.log(id);
    const matchId = inputVal.find((val)=>{//find()mtd se hum matched Id find karte hai & never use map()mtd
      //to find out matched Id.
       return val.id === id
 })
   setToggleBtn(false);
    setData(matchId.name);
    setIsEditVal(id);
  }

  const delTodo = (id) => {
    console.log(id);
    const delData = inputVal.filter((val)=> 
      // console.log(val.id !== id);
      val.id !== id
    )
    setInputVal(delData)
  }

  const removeAll = () => {
    setInputVal([]);
    setData('')
    setToggleBtn(true)
  }
  
  return (
    <div className='mybox col-sm-12'>
      <div className='box1'>
        <img src={TodoImg} alt='todo app' title='todo app'/>
      </div>
      <div className='box2'>
        <h2 className='text-primary'>Todo List App</h2>
      </div>
      <div className='box3 input-group mb-3'>
     <input type="text" class="form-control" placeholder="enter your task" 
      aria-label="Username" aria-describedby="basic-addon1" value={data} onChange={(e)=>setData(e.target.value)}/>
      {toggleBtn ? <button className='btn btn-primary btn-lg' type='button' onClick={todoFunc}>Add</button> :
      <button className='btn btn-success btn-lg' type='button' onClick={todoFunc}>Edit</button> }
      </div>
      <div className='box4'>
        <ul>
         {
          inputVal.map((val,i)=>
            <li className='myResult' key={i}>{val.name}
            <div className='myButton'>
            <button className='btn btn-warning btn-small btn1' onClick={()=>editTodo(val.id)}>Edit</button>
            <button className='btn btn-danger btn-small btn2' onClick={()=>delTodo(val.id)}>Delete</button>
            </div>
            </li>
          )
         }
        </ul>
      </div>

      <div className='box5'>
      {inputVal.length >= 1 && <button className='btn btn-dark btn-small' onClick={()=>removeAll()}>Remove All</button> }
      {/**&& (and) operator means If inputVal array mai 1 bhi character hai toh hi remove all btn show hoga  */} 
      </div>

    </div>
  )
}

export default MyTodo