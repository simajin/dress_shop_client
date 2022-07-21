import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
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
    
    // 어바웃 클릭이벤트
    function aboutEvent(){
        window.scrollTo (0,800);
    }
    const [ searchMenu, setSearchMenu] = useState(false);
    const [ dress, setDress ] = useState(null);
    const [ search, setSearch ] = useState('');
    
    const searchBox = useRef()
    let showMenu = false
    function showSearchMenu(){
        if(showMenu === false){
            searchBox.current.style.opacity = "1";
            searchBox.current.style.transition = "0.5s";
            showMenu = true;
        }else{
            searchBox.current.style.opacity = "0";
            searchBox.current.style.transition = "0.5s";
            showMenu = false;
        }
    }

    // 카테고리
    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/dresses`)
    //     .then(result => {
    //         console.log(result);
    //         const resulta = result.data;
    //         setDress(resulta[0].type); 
    //     })   
    //     .catch(e=> {
    //         console.log(e);
    //     })
    //     // eslint-disable-next-line
    // },[])
    
    
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
                    <li><Link to="/shop">SEARCH</Link></li>
                    {/* <li id='searchText'> */}
                        {/* <p  onClick={showSearchMenu}><Link to="/shopSearch">SEARCH</Link></p> */}
                        {/* <ul id='searchBox' ref={searchBox}>
                            <li>
                                <h4>Type</h4>
                                <p><Link to={"/shop/"+dress}>Bell line</Link></p>
                                <p >Mermaid</p>
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
                        </ul> */}
                    {/* </li> */}
                    <li><button className='barBtn' onClick={menuClose}>X</button></li>
                </ul>
        </aside>
        </>
    );
};

export default Aside;