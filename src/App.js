import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Folio from './components/Folio';
import Counter from './components/Counter';
import Calculator from './components/Calculaor';
import Todo from './components/Todo';
import Weather from './components/Weather';
import Recipe from './components/Recipe';
import Pixabay from './components/Pixabay';
import Search from './components/Search';
import Crypto from './components/Crypto';




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
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/gallery' element={<Pixabay/>}/>
            <Route path='/gallery/search/:gdata' element={<Search/>}/>
            <Route path='/crypto' element={<Crypto/>}/>

            







           


         </Routes>
    </BrowserRouter>

    </div>
    </>
  );
}

export default App;
