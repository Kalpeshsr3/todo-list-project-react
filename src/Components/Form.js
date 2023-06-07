import React, { useState } from 'react';

function Form(){
    const [formVal,setFormVal] = useState({
        username:'',
        email:'',
        occupation:'engineer',
        gender:'',
        languages:[],
        image:''
    });
   

    const onchangeHandler = (e)=>{
        // console.log(e);
        if(e.target.name === 'languages'){
            let copy = {...formVal}
            // console.log(copy);
            if(e.target.checked){
                copy.languages.push(e.target.value)
            }
            else{
    // copy.languages = copy.languages.filter((el) => console.log('el '+ el, 'e.target.value'+ e.target.value))//
    //el mai jis languages ko select karte hai unke name aate hai & e.target.value mai jisko hum 1st select karke
    //phir unselect karte hai unke name aate hai toh hamari condition el !== e.target.value ye humko jo humne 
    //language select karke phir unselect ki hai usko filter out karti hai means eliminate karti hai & jo currently
    //selected hai tick hai usko apne languages array mai add karti hai
                copy.languages = copy.languages.filter((el) => (el !== e.target.value))
           }
            
            setFormVal(copy)

        }
        else{
            setFormVal({...formVal,[e.target.name]:e.target.value});
        }
        

    }
    const onsubmitHandler = (e)=>{
        e.preventDefault();
        console.log(formVal);
    }
    return(
        <>
        <h1 style={{textAlign:'center'}}>All Inputs fields htmlForm</h1>
        <div className='myform'>
            <form onSubmit={onsubmitHandler}>
                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='username' name='username' onChange={onchangeHandler}/>
                <br/><br/>
                <label htmlFor='email'>Email:</label>
                <input type='text' placeholder='email' name='email' onChange={onchangeHandler}/>
                <br/><br/>
                <label htmlFor='occupation'>Occupation:</label>
                
                <select name='occupation'  onChange={onchangeHandler}>
                    
                    <option value='enginner'  >Engineer</option>
                    <option value='doctor'  >Doctor</option>
                    <option value='actor' >Actor</option>
                </select>
                <br/><br/>
                <label htmlFor='gender'>Gender:</label>&nbsp;
                Male:<input type='radio' name='gender' value='male'  onChange={onchangeHandler}/>&nbsp;
                Female:<input type='radio' name='gender' value='female'  onChange={onchangeHandler}/>&nbsp;
                Others:<input type='radio' name='gender' value='other'  onChange={onchangeHandler}/>
                < br/><br/>
                <label htmlFor='languages'>Languages:</label>&nbsp;
                English:<input type='checkbox' name='languages' value='english'  onChange={onchangeHandler}/>&nbsp;
                Spanish:<input type='checkbox' name='languages' value='spanish'  onChange={onchangeHandler}/>&nbsp;
                Japanase:<input type='checkbox' name='languages' value='japanase'  onChange={onchangeHandler}/>
                < br/><br/>
                Image: <input type='file' name='image' onChange={onchangeHandler}/>
                < br/><br/>

                <input type='submit' className='btn btn-success' value='Submit'/>

                
            </form>
           
        </div>
       
        </>
    )
}
export default Form;