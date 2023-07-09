import React from 'react';
import './counter.css';
import { useReducer } from 'react';

 function Counter () {
    const [state,dispatch]=useReducer(reducer,0);

    function reducer(state,action){
        if(action.type==="inc")
            return  state+1
        else if(action.type==="dec")
            return state-1
        else
            return 0
    
    }

  return (
    <div className='card'>
      <div className='container  card-body mt-5 w-50 counter'>
        <h1 className='text-center'>counter app</h1>
        <div className='text-center my-5'>
        <h1 className=' '>{state}</h1>
        <button onClick={()=>{dispatch({type:"dec"})}} className='btn btn-danger  mx-2 mt-4'>Decrement</button> 
         <button onClick={()=>{dispatch({type:"inc"})}} className='btn btn-success mx-2 mt-4'>Increment</button>
        </div>
        
      </div>
    </div>
  )
}

export default Counter
