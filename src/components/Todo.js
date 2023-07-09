import React, {useState} from 'react';
import './todo.css';


 function Todo () {

    let [todoInput,settodoInput]=useState("");

    let [todolist,setTodolist]=useState([
        "learn react", "learn js"
    ]);

    
    function addNewTodo(){
        if(todoInput===""){
            alert("add some task")
        }
        else{
           let newTodo=[
                ...todolist ,todoInput
            ]
            setTodolist(newTodo);
            settodoInput("")
        }
    }

    function deleteTodo(indexValue){
       let updatedTodos= todolist.filter((todo,index)=>{
            return index!==indexValue
        })
      
        setTodolist(updatedTodos)

        
    }

    return (
    <div className='todo'>
      <div className='container pt-5 w-50 '>
      <h1 className='text-center text-white'>TO DO APP</h1>  
      <div className='input-group'>
        <input className='form-control' value={todoInput} onChange={(e)=>{
            let task=e.target.value;
            settodoInput(task)
        }} />
        <button className='btn btn-light'  onClick={()=>{addNewTodo()}}>ADD</button>
      </div>
       
      <ul className='list-group mt-3'>
        
       {
        todolist.map((u,index)=>{
          return(
            <li className='list-group-item' key={index}>
          <p>{u}  </p>
          <button onClick={()=>{deleteTodo(index)}}>❌</button>
          </li>
          )
        })
       }
      </ul>
    </div>

    </div>  
      )
 }

export default Todo
