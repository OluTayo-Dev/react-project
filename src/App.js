import {BrowserRouter, Routes, Route} from "react-router-dom";
//import accordion from './component/accordion';
import Home from './component/Home';
import Tracks from './component/Tracks';
import './App.css';

function App() {
  return (
 <BrowserRouter>
   <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/tracks" element={<Tracks />} /> 
   </Routes>
 </BrowserRouter>
  );
}

export default App;
