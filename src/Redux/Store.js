// import {createStore} from 'redux';

// const reducer = (state = 0, action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;//jab hum increment or decrement btn pe click karte hai toh new state milti hai & 
//             //ussi state ko hum idher return kar rahe hai jo redux store mai jayegi & phir uss value ko store mai
//             //se retrieve karne ke liye hum useSelector()hook use karte hai 
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export const Store = createStore(reducer);

import {createStore} from 'redux';
export const reducer = (state=0,action) => {
    switch(action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}
export const store = createStore(reducer);