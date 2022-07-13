import './App.css';
import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
