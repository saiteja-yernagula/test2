import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Folio from './components/Folio';
import Counter from './components/Counter';
import Calculator from './components/Calculaor';




function App() {
  return (
    <>
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Folio/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/calculator' element={<Calculator/>}/>


           


         </Routes>
    </BrowserRouter>

    </div>
    </>
  );
}

export default App;
