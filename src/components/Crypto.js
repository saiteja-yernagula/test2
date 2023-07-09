import React from 'react';
import Crypto2 from './Crypto2';
import './crypto.css';

import { useState,useEffect } from 'react';
import axios from 'axios';

function Crypto () {
    const [search,setSearch]=useState('')

    const [coin,setCoin]=useState('')

    useEffect(()=>{getcrypto()},[])

    async function getcrypto(){
        let res=await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=20`)
       
        setCoin(res.data.coins)
        
    }


  return (
    <>
      <div className='p-4 cmain'>
        <center>
           <h5 className='w-50'>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control' placeholder='search for crypto' />
           </h5>
        </center>
      </div>

      <div>
        <div className='row'>
            {
             (coin.length)>0 &&
              coin.filter(crypto=>crypto.name.toLowerCase().includes(search.toLowerCase())).map((crypto)=>{return(
                <div className='col-sm-3' key={crypto.id} > 
                    <Crypto2 {...crypto}></Crypto2>
                </div>
            )})            
            }
        </div>
      </div>
    </>
  )
}

export default Crypto
