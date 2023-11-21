import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Componenets/Navbar/Navbar';
import Footer from './Componenets/Footer/Footer';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Events from './Pages/Events';
import Organize from './Pages/Organize';
import Participate from './Pages/Participate';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/organize' element={<Organize/>}/>
        <Route path='/participate' element={<Participate/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;