import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    
    // 메뉴 클릭이벤트 한번 눌렀을때
    function menuClick() {
        let menu = document.querySelector('#menu');
        let bugerTab = document.querySelectorAll('.bugerTab');
        // let menuBar = document.querySelector('#menu_bar');
        menu.style.right = '0';
        menu.style.transition = '0.5s';
        bugerTab[0].style.display = 'none';
        bugerTab[1].style.display = 'none';
        // 메뉴 나왔을때 새로운 X버튼 생성
    }
    function menuClose(){
        let menu = document.querySelector('#menu');
        let bugerTab = document.querySelectorAll('.bugerTab');
        menu.style.right = '-650px';
        menu.style.transition = '0.5s';
        setTimeout(() => {
            bugerTab[0].style.display = 'block';
            bugerTab[1].style.display = 'block';
        }, 300);
        
    }
    
    //어바웃 클릭이벤트
    function aboutEvent(){
        window.scrollTo (0,800);
    }
    
    const searchBox = useRef();
    return (
        <>
            <div id="menu_bar" onClick={menuClick} className='inner'>
                <span className='bugerTab'></span>
                <span className='bugerTab'></span>
            </div>
        <aside>
                <ul id="menu">
                    <li><Link to="/Login">LOGIN</Link><br/><br/></li>
                    <li onClick={aboutEvent}><Link to='/'>ABOUT</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/cart">CART</Link></li>
                    <li id='searchText' onClick={()=>{
                        searchBox.current.style.opacity="1";
                    }}>
                        <p>SEARCH</p>
                        <ul id='searchBox' ref={searchBox}>
                            <li>
                                <h4>Type</h4>
                                <p>Bell line</p>
                                <p>Mermaid</p>
                            </li>
                            <li>
                                <h4>Size</h4>
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                            </li>
                            <li>
                                <h4>Season</h4>
                                <p>SS22</p>
                                <p>FW21</p>
                                <p>SS21</p>
                            </li>
                        </ul>
                    </li>
                    <li><button className='barBtn' onClick={menuClose}>X</button></li>
                </ul>
        </aside>
        </>
    );
};

export default Aside;