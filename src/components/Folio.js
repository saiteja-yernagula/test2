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
       
            
         <Link className='b1' to='/calculator'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>Calculator app</li></Link>
         <Link className='b2' to='/pixabay'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>gallery app</li></Link>
         <Link className='b3' to='/crypto'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>cryto app</li></Link>



         <Link className='b4' to='/recipe'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'> foodie app</li></Link>
         <Link className='b5' to='/weather'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>weather</li></Link>
         <Link className='b6' to='/todo'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>Todo app</li></Link>
         <Link className='b7' to='/counter'><li className='col-sm-3 m-3 p-3 btn btn-outline-dark'>Counterr app</li></Link>

        </ul>
      </center>
      </center>
    </div>
  )
}

export default Folio