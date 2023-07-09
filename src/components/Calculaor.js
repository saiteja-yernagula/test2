import React from 'react';
import { useRef } from 'react';
import './calc.css';



function Calculator () {

let userinput=useRef();
let ex="";

function press(num){
    ex+=num;
    userinput.current.value+=num;
}

function equal(){
    userinput.current.value=eval(ex)
}

function erase(){
    ex="";
    userinput.current.value="";

}

  return (
    <div className='mn-casio'> 
      <h3 className='text-center mt-5 text-dark'> React calculator app</h3>  

     <div className='containercalc'>
        
        <div className='calculator'>
        <input className='userinput'  ref={userinput} />
      
        <button onClick={()=>{press(1)}}>1</button>
        <button onClick={()=>{press(2)}}>2</button>
        <button onClick={()=>{press(3)}}>3</button>
        <button onClick={()=>{press("+")}} style={{backgroundColor:'#ff66b3'}}>+</button>
      

      
        <button onClick={()=>{press(4)}}>4</button>
        <button onClick={()=>{press(5)}}>5</button>
        <button onClick={()=>{press(6)}}>6</button>
        <button onClick={()=>{press("-")} } style={{backgroundColor:'#ff99cc'}}>-</button>
      

      
        <button onClick={()=>{press(7)}}>7</button>
        <button onClick={()=>{press(8)}}>8</button>
        <button onClick={()=>{press(9)}}>9</button>
        <button onClick={()=>{press("*")}} style={{backgroundColor:'#ffb3d9'}}>*</button>
     

      
        <button onClick={()=>{press(".")}}>.</button>
        <button onClick={()=>{press(0)}}>0</button>
        <button onClick={()=>{erase()}}>C</button>
        <button onClick={()=>{press("/")}} style={{backgroundColor:'#ffcce6'}} >/</button>
      

      <div>
       <button className='btn1' onClick={()=>{equal()}} style={{backgroundColor:'#ffe6f2'}}>=</button>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
