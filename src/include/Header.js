import React from 'react';

const Header = () => {
    let menuBar = document.querySelector('#menu_bar');
    function menuClick() {
        // menuBar.addEventListener('click',()=>{
        let menu = document.querySelector('#menu');
        menu.style.right = '50px';
        menu.style.transition = '0.5s';
        // })
    }

    return (
        <div id="header">
            <div className='inner'>
                <h1><svg id="wLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50"><path id="logoLine" className="cls-1" d="M28.36,26S8.5,30.5,5.5,19.5s29-18,30-4a243.83,243.83,0,0,1,0,29h1.65S49.53,21.76,49.52,24.63,52.29,43.5,60.4,44.5s-1.9-11,14.1-40"/></svg></h1>
                <div id="menu_bar" onClick={menuClick()}>
                    <span></span>
                    <span></span>
                </div>
                <ul id="menu">
                    <li>ABOUT</li>
                    <li>SHOP</li>
                    <li>CART</li>
                    <li>SEARCH</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;