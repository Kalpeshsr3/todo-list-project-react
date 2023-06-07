import React,{useState} from 'react'

const UseStateArray = () => {
    const myArr = [11,22,33,44];
    const [arr,setArr] = useState(myArr);

    const handleChange = (e) =>{
        // console.log('hello');
        setArr(prevState=>{
            return [
                // ...prevState,3421 <= it will add 3421 after last index array
                ...prevState,Math.floor(Math.random()*50)
            ]
    })
    }
  return (
    <div><h1>UseState with Array</h1>
    <ul>{
        arr.map((val,i)=>(

       <li key={i}>{val}</li>
            
        ))
        }</ul>
        <button className='btn btn-dark' onClick={handleChange}>Update Array</button>
    </div>
  )
}

export default UseStateArray