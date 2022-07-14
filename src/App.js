import './App.css';

// import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
// import MainPage from './main/index';
// import { Routes, Route } from 'react-router-dom';
// import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MainPage/> */}
      {/* <About /> */}
      {/* <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
