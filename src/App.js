
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './Navigationbar';
import CarouselPage from './CarouselPage'
import CardPage from './CardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigationbar/>
      <Routes>
      <Route path='/carousel' element={<CarouselPage/>}></Route>
      <Route path='/card' element={<CardPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
