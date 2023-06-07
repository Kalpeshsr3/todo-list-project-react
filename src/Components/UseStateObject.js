import React, { useState } from 'react';

function UseStateObject(){
    const myObj = {
        name:'jack',
        height:6.5,
        age:25,
        isYoung:true
    }
    const [obj,setObj] = useState(myObj);

    const handleChange = (e)=>{
        // console.log('hello');
        setObj({
        //     name:'micheal',//sirf name change karna ho toh pura object likhna padta hai.So follow below mtd
        // height:6.5,
        // age:25,
        // isYoung:true
        })
        setObj(previousState=>{
            return {
                ...previousState,name:'amy'
            }
        }
       )
    }

    return(
        <>
        <h1>useState with Object</h1>
        <h2>Name: {obj.name}</h2>
        <h2>Height: {obj.height}</h2>
        <h2>Age: {obj.age}</h2>
        <h2>isYoung: {obj.isYoung.toString()}</h2>
        <button className='btn btn-primary' onClick={handleChange}>Update Object</button>
        </>
    )
}
export default UseStateObject;