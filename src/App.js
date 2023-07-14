import logo from './logo.svg';
//import './App.css';
import Te from './Te';
import Login from "./Login";
import Register from "./Register";
import Dashboard from './Dashboard';
import Transi from './Transi';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Te/>}/>
      <Route path='/Te' element={<Te/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Transi' element={<Transi/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
