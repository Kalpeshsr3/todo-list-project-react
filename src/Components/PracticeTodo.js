import React,{useState} from 'react';

function PracticeTodo(){
   const [data,setData] = useState("");
   const [myinput,setmyinput] = useState([]);
   const [togglebtn,setToggleBtn] = useState(true);
   const [isEditItem,setIsEditItem] = useState(null);

   const myfunc = () => {
      if(!data){
        alert('please write your todo')
      }
      else if(data && !togglebtn){
        setmyinput(
          myinput.map((val)=>{
            if(val.id === isEditItem){
              return {...val,name:data}
            }
            else{
              return val;
            }
          })
        )
        setData('')
        setToggleBtn(true);
        setIsEditItem(null);
      }
      else{
        setmyinput([{id:`${data}-${Date.now()}`,name:`${data}`},...myinput])
        setData(" ")
      }
      
      
   }

   const myedit = (i) => {
    console.log(i);
    const editData = myinput.find((val)=>{
      return val.id === i;//find()mtd give us jis particular edit btn pe click kiya hai uske id ko
      //array ke stored data se matched id ki information dega
    })
    // console.log(editData);
    setToggleBtn(false);
    setData(editData.name);
    setIsEditItem(i);

   }

   const mydelete = (i) => {
    // console.log(i);
    const delval = myinput.filter((val)=> {
      // console.log(val.id);
      return val.id !== i//means jis particular id pe click kiya hai usko hum list ke id's ke sath match karke
      //dekhenge & phir jo "match nahi honge" hamare particular id ke sath unko return karenge & unn unmatched id
      //ko hum apne array mai send karenge so jab state update hoga toh jo unmatched hai vo show honge 
      // console.log(val.id == i);

      
    })
// console.log(delval);
     setmyinput(delval)//delval variable mai jo unmatched data hai vo hai & usko hum setmyinput()func mai bhej
     //rahe hai so vo myinpput state mai jayenge & state update hoke apne ko show honge
}

   const removeAll = () => {
    setmyinput([])
   }
   console.log(myinput);
  return(
    <div>
      {/* {console.log('return running-> state updating jab bhi hum input mai changes karenge')} */}
      <input type='text' placeholder='enter name' value={data} onChange={(e)=>setData(e.target.value)}/>
      {togglebtn ? <button onClick={myfunc}>click</button> : <button onClick={myfunc}>edit</button>}
      
      <ul>
      {
        myinput.map((val,i)=>{
          
          return(
            <div className='todo-btn'  key={val.id}>
            <li>{val.name}</li>
            <button  onClick={()=>myedit(val.id)}>edit</button>
            <button onClick={()=>mydelete(val.id)}>delete</button>

            </div>
          )
        })
      }
      </ul>
      {myinput.length >= 1 && <button onClick={()=>removeAll()}>Remove All</button> }
    </div>
  )
}

export default PracticeTodo