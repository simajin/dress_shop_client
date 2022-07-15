import './App.css';
import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main/index';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Shop from './components/Shop';
import Aside from './include/Aside';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/' element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
