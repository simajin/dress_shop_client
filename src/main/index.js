import React,{useEffect} from 'react';
import About from '../components/About';
import './index.css';

const MainPage = () => {
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let scrollBot = document.querySelector('#botLineDiv');
            let scrollTop = document.querySelector('#topLineDiv');
            console.log(window.scrollY)
            if(window.scrollY > 1){
                scrollBot.style.opacity = `${1-window.scrollY/200}`;
            }
            if(window.scrollY > 600){
                scrollTop.style.opacity = `${0+(window.scrollY/300)-2}`;
            }else {
                
                scrollTop.style.opacity = `${0-window.scrollY/1000}`;
            }
        })
    },[])
    //scroll 사라지게
    return (
        <>
        <div className='body'>
            <div className="text">
                <h1>YOUR DREAM</h1>
            </div>
            <div className="outline">
                <div className="waves"></div>
            </div>
            <div id="topLineDiv">
                <div id='topLine'></div>
                <p>About</p>
            </div>
            <div id="botLineDiv">
                <p>Scroll Down</p>
                <div id='botLine'></div>
            </div>
        </div>
            <About/>
        </>

    );
};


export default MainPage;