import React from 'react';
import './crypto.css';


function Crypto2({icon,name,rank,price,marketCap}) {
  return (
    
      <div className='cgrid'>
        <ul>
            <li><img alt="img" src={icon} /></li>
            <li style={{color:"orange"}}>{name}</li>
            <li>Rank: {rank}</li>
            <li>price: {Math.round(price *82)}</li>
            <li>Marketcap: {Math.round(marketCap)} </li>
        </ul>
      </div>
  )
}

export default Crypto2
