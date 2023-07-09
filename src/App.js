import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Folio from './components/Folio';
import Counter from './components/Counter';



function App() {
  return (
    <>
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Folio/>}/>
            <Route path='/counter' element={<Counter/>}/>

           


         </Routes>
    </BrowserRouter>

    </div>
    </>
  );
}

export default App;
