// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../components/modules/logincookie';
import { getCookie, removeCookie } from '../components/util/cookie';
import { MenuClose } from './MenuClose';

const Aside = () => {
    const navigate = useNavigate();

    // ⚡쿠키 -- 로그인 유지
    const uid = getCookie('userid');
    const uname = getCookie('username');
    const dispatch = useDispatch();
    const isLogin = useSelector(state=>state.logincookie.isLogin)
    const logoutClick = () => {
        removeCookie('username');
        removeCookie('userid');
        dispatch(setLogout());
        navigate('/');  //로그아웃시, 홈으로 이동
    }
    useEffect(()=>{
        
    },[isLogin])

    
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
    const {menuBtn, burgerTabBtn1, burgerTabBtn2} = MenuClose();
    
    // 어바웃 클릭이벤트
    function aboutEvent(){
        window.scrollTo (0,800);
    }



    // ⚡session 이용했을 때, --> 쿠키가 유지됨에 따라 로그인 버튼을 로그아웃 버튼으로 바꾸어 주기 
    // alert( document.cookie );           //자바스크립트 쿠키 부르는법
    // const cookies = "<%= cookie %>";
    // const log = document.querySelector(".log");
    // if (cookies === "false") {
    //     log.innerHTML = "Login";
    //     log.href = "/login";
    // } else {
    //     log.innerHTML = "Logout";
    //     log.href = "/logout";
    // }
    // console.log(document.cookies);

    


    // 검색
    // const [ searchMenu, setSearchMenu] = useState(false);
    // const [ dress, setDress ] = useState(null);
    // const [ search, setSearch ] = useState('');
    
    // const searchBox = useRef()
    // let showMenu = false
    // function showSearchMenu(){
    //     if(showMenu === false){
    //         searchBox.current.style.opacity = "1";
    //         searchBox.current.style.transition = "0.5s";
    //         showMenu = true;
    //     }else{
    //         searchBox.current.style.opacity = "0";
    //         searchBox.current.style.transition = "0.5s";
    //         showMenu = false;
    //     }
    // }

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
    
    // 로그인X -> cart 클릭시, 로그인 후 이용 알람창
    const onCart = (e) => {
        if(!uid) {
            alert('로그인 후 이용해주세요.');
            navigate('/login');
        }
    }
    
    return (
        <>
            <div id="menu_bar" onClick={menuClick} className='inner'>
                <span className='bugerTab' ref={burgerTabBtn1}></span>
                <span className='bugerTab' ref={burgerTabBtn2}></span>
            </div>
        <aside>
                <ul id="menu" ref={menuBtn}>
                    {
                        isLogin && <>
                        <li className='logUser'>Welcome {uname}💍</li>
                        <li onClick={logoutClick}>LOGOUT<br/><br/></li>
                        </>
                    }
                    {
                        isLogin || <>
                        <li><Link to="/login">LOGIN</Link><br/><br/></li>
                        {/* <li><Link to="/join">회원가입</Link></li>  */}
                        </>

                    }
                    {/* <li>{cookies ? <Link to="/logout">LOGOUT</Link> : <Link to="/login">LOGIN</Link>}<br/><br/></li> */}
                    {/* <li><Link to="/login" className='log'>LOGIN</Link><br/><br/></li> */}
                    <li onClick={aboutEvent}><Link to='/'>ABOUT</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li onClick={onCart}><Link to={`/cart/${uid}`}>CART</Link></li>
                    {/* <li><Link to="/shop">SEARCH</Link></li> */}
                    <li><Link to="/notice">NOTICE</Link></li>
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