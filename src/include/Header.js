import React from 'react';


const Header = () => {
    // 메뉴 클릭이벤트 한번 눌렀을때
    function menuClick() {
        let menu = document.querySelector('#menu');
        let bugerTab = document.querySelectorAll('.bugerTab');
        let menuBar = document.querySelector('#menu_bar');
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
    

    // 로고 이벤트
    let isEventOn = true;
    function logoEvent(){
        const logo = document.getElementById('wLogo');
        if(isEventOn === true){
            logo.style.animation = "logo-ani 4s ease-in-out forwards";
            isEventOn = false;
            setTimeout(()=>{
                isEventOn = true;
                logo.style.animation = "";
            },4000)
    
        }
        return isEventOn;

    }


    return (
        <div id="header">
            <div className='inner'>
                <h1><svg id="wLogo" onMouseEnter = {logoEvent} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50"><path id="logoLine" className="cls-1" d="M28.36,26S8.5,30.5,5.5,19.5s29-18,30-4a243.83,243.83,0,0,1,0,29h1.65S49.53,21.76,49.52,24.63,52.29,43.5,60.4,44.5s-1.9-11,14.1-40"/></svg></h1>
                <div id="menu_bar" onClick={menuClick}>
                    <span className='bugerTab'></span>
                    <span className='bugerTab'></span>
                </div>
                <ul id="menu">
                    <li>ABOUT</li>
                    <li>SHOP</li>
                    <li>CART</li>
                    <li>SEARCH</li>
                    <li><button className='barBtn' onClick={menuClose}>X</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;