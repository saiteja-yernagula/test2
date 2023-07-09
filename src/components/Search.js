import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Search=()=>{

    const {gdata}=useParams();

    let [gresult,setGresult]=useState([])
    
    useEffect(()=>{imgdata()},[])

    async function imgdata(){
        let res=await axios.get(`https://pixabay.com/api/?key=7685538-ea988db1f25ef51f3d2df1490&q=${gdata}&image_type=photo`)
        setGresult(res.data.hits)
    }
  
  return (
    <div className=''>
       <div className='p-5 row'>
               {
                 gresult.map((img)=>
                 <div  className='col-sm-6 p-1'> 
                   <div className=''>
                    <img className='img-rounded ' style={{width:'90vh'}} alt='img' src={img.largeImageURL}/>
                   </div>
                 </div>
                 )
               }
            </div>
    </div>
  )
}

export default Search
