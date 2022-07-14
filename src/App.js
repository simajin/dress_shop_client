import './App.css';
import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main/index';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <About/>
      <Routes>
        <Route path="/Login" element={<Login/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
