import React from 'react';
import './pixabay.css';
import Search from './Search';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';

function Pixabay() {
    let navigate=useNavigate();
    let [gdata,setGdata]=useState('');


  return (
    <div className='pixabay'>
    
      <div>
        <div>
                <h1>Unsplash</h1>
                <h3>The internets source for visuals.</h3>
                <h3>Powered by creators everywhere.</h3>
                <form className='input-group  text-center pt-3 pb-3' >
                 <input value={gdata} onChange={(e)=>{setGdata(e.target.value)}} className='form-control p-2' placeholder='Search high resolution images '/>
                 <button className='btn btn-light' onClick={()=> gdata && navigate(`/gallery/search/${gdata}`)}>Get images</button>
                </form>
                <div style={{fontWeight:'700'}} className='p-p' >Trending :  
                 <span  onClick={()=> navigate(`/gallery/search/flower`)}> flowers, </span>
                 <span onClick={()=> navigate(`/gallery/search/walpaper`)}> walpaper, </span>
                 <span onClick={()=> navigate(`/gallery/search/background`)}> background,  </span>
                 <span onClick={()=> navigate(`/gallery/search/love`)}>love,  </span>
                 <span onClick={()=> navigate(`/gallery/search/happy`)}> happy </span>
                 </div>
                 
        </div>
      </div>
    </div>
  )
}

export default Pixabay
