import React from 'react';
import { useState } from 'react';
import axios from 'axios';


 function Recipe(){

    let [gdata,setGdata]=useState('paneer');
    let [gresult,setGresult]=useState([])

    async function submitholder(e){
        e.preventDefault();
        let res=await axios.get(`https://api.edamam.com/search?q=${gdata}&app_id=a52b4d43&app_key=e0e5c667605f5e91d8275c973531b80a`)
        setGresult(res.data.hits)
        console.log(res.data.hits[1].recipe)
        console.log(res.data.hits[1].recipe.cautions)
        console.log(res.data.hits[1].recipe.cuisineType)
        console.log(res.data.hits[2].recipe.calories)
        console.log(res.data.hits[1].recipe.dietLabels)




    }

  return (
    <div>
        <div className='weather  '>
      <div className='container p-3'>
        <div className='card-body text-center'>
            <center>
            <h1 className='card-title p-3'>Foodie app</h1>
            <form className='input-group w-50 text-center' >
                <input value={gdata} onChange={(e)=>{setGdata(e.target.value)}} className='form-control'/>
                <button onClick={submitholder} className='btn btn-light'>Get images</button>
            </form>
            </center>
            <div className='p-4 row'>
               {
                 gresult.map((img,index)=>
                 <div  className='col-sm-6 p-2' key={index}> 
                   <div className=''  >
                    <ul className='list-group  text-center'>
                        <li  className='list-group-item'>
                    <img  className='img-rounded ' style={{width:'80vh'}} alt='img' src={img.recipe.image}/>

                        </li>
                        <li className='list-group-item'>{"Cuisine type: "+ img.recipe.cuisineType}</li>
                        <li className='list-group-item' >{"Caution: "+img.recipe.cautions}</li>
                        <li className='list-group-item'>{"Calories: "+ img.recipe.calories}</li>
                        <li className='list-group-item '>{"Diet : "+img.recipe.dietLabels } {img.recipe.dietLabels>=0  && <span >-Na-</span>}</li>

                    </ul>
                   </div>
                 </div>
                 )
               }
              
            </div>

        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Recipe