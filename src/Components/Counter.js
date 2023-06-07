// import React from 'react';
// import { useSelector } from 'react-redux';
// const Counter = () => {
//     const newCount = useSelector((state) => state)//useSelector((state) => state) mai hamare pass redux store ke
//     //state ka access hota hai & useSelector((state)) means hum store mai se state ko get kar rahe-le rahe hai &
//     //ussi state ko return kar rahe useSelector((state)=> state) , return iss liye kar rahe hai ki taki hum UI mai
//     //update state value ko show kar sake
    
//     console.log(newCount);
//     return(
//         <>
        
//         <h2>Counter : {newCount}</h2>
        
//         </>
//     )
// }

// export default Counter;

import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const newCount = useSelector((state) => state);
  return (
    <div>
        <h1>Counter value: {newCount}</h1></div>
  )
}

export default Counter