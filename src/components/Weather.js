import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './weather.css';



 function Weather(){
    let [city,setCity]=useState('Tirupati');
    let [result,setresult]=useState('')

    
    async function submitholder(e){
        e.preventDefault();
        let res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        let kelvin=res.data.main.temp-273
        
        setresult("Temperature at "+city +'\n'+Math.round(kelvin)+"°C")
    }


  return (
    <div className='weather  demo'>
      <div className='container p-3'>
        <div className='card-body text-center'>
            <center>
            <h1 className='card-title p-3'>weather app</h1>
            <form className='input-group w-50 text-center' >
                <input value={city} onChange={(e)=>{setCity(e.target.value)}} className='form-control'/>
                <button onClick={submitholder} className='btn btn-light'>Get temp2</button>
            </form>
            <h2 className='p-4'>{result} </h2>
            </center>
        </div>
      </div>
    </div>
  )
}

export default Weather
