import './App.css';
import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main/index';
import { Routes,Route } from 'react-router-dom';
// import Login from './components/Login';  // session 이용한거 나중에!
import Shop from './components/Shop';
import Aside from './include/Aside';
import ScrollToTop from './components/ScrollToTop';
import Join from './components/Join';
import DetailDress from './components/DetailDress';
import Cart from './components/Cart';
// import ShopSearch from './components/ShopSearch';
import UploadProduct from './components/UploadProduct';
import EditProduct from './components/EditProduct';
import Login2 from './components/Login2'; //cookie 이용 로그인
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookie } from './components/util/cookie';
import { setLogin } from './components/modules/logincookie';
import Notice from './components/Notice';



function App() {
  // 새로고침되면 로그아웃 되는거 해결
  const dispatch = useDispatch();
  const uname = getCookie('username');  //cookie 이름
  useEffect(()=>{
    if(uname){        //uname이 있으면(로그인한거)
      dispatch(setLogin())
    }
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <ScrollToTop />
      <Header/>
      <Aside/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/' element={<About/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/login" element={<Login2/>} />
        <Route path="/register" element={<Join/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<DetailDress/>} />
        <Route path='/cart/:ids' element={<Cart/>} />
        <Route path='/upload' element={<UploadProduct/>} />
        <Route path='/editDress/:id' element={<EditProduct/>} />       
        <Route path='/notice' element={<Notice/>} />       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
