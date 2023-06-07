import React,{useState} from 'react';

export default function Todo(){
    const [activity,setActivity] = useState("");
    const [listData,setlistData] = useState([]);
    function addActivity(){
        // setlistData([...listData,activity]);
        // console.log(listData);

        // setlistData((listData)=>{
        //     // const updatedList = [...listData,activity];
        //     const updatedList = ([{id:`${activity}-${Date.now()}`,activity},...listData])
        //     console.log(updatedList);
        //     setActivity('');
        //     return updatedList;
        // })
        setlistData([{id:`${activity}-${Date.now()}`,activity},...listData])
    }
    function removeActivity(i){
        console.log(i);
        const updatedlistData = listData.filter((elem,id)=>{
            return i!==id;
        })
        return setlistData(updatedlistData)
    }

    function editActivity(i){
        console.log(i);
        const edittodo = listData.find((val)=> {
            console.log(val);
        });
        console.log(edittodo);
        // setlistData(edittodo.listData)
        // setActivity(edittodo.activity)
    }

    function removeAll(){
        setlistData([])
    }
    return(
        <>
        <div className='container'>
        <div className='mytodo'>
        <h2>Todo list React App</h2>
        <br/>
        <input type='text' placeholder='add activity' value={activity} 
        onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <h4>Here is your todo list : {")"}</h4>
        {listData !== [] && listData.map((data,i)=>{
           return(
            <>
            <p key={i} style={{border:'1px solid green'}}>{data}</p>
            <button key={i} onClick={()=>removeActivity(i)}>Remove(-)</button>
            <button key={i} onClick={()=>editActivity(i)}>Edit(+)</button>

          </>
           )
        })}
        {listData.length >=1 && <button onClick={()=>removeAll()}>Remove All</button>}
        
        </div>
        </div>
        </>
    )
}