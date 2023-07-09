import React from 'react';
import './folio.css';
import {Link} from 'react-router-dom';


function Folio (){
  return (
    <div className='folio'>
      <center>
        <h1 className='itslic'>Folioo</h1>
        
        
        

     </center>

      <center>
      <center className='text-center d-block'>
        <ul>
       
            

            <Link className='b7' to='/counter'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>Counterr app</li></Link>

        </ul>
      </center>
      </center>
    </div>
  )
}

export default Folio