import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Folio from './components/Folio';
import Counter from './components/Counter';
import Calculator from './components/Calculaor';
import Todo from './components/Todo';




function App() {
  return (
    <>
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Folio/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/todo' element={<Todo/>}/>



           


         </Routes>
    </BrowserRouter>

    </div>
    </>
  );
}

export default App;
