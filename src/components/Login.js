// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './LoginCss.css';
import axios from 'axios';
import { API_URL } from './config/contansts';
// import { useParams } from 'react-router-dom';
// import { Params } from 'react-router-dom';



// ⚡session 이용한거 --> X
const Login = ({logLogout}) => {
    const navigate = useNavigate();
    console.log(logLogout);
    //ID, PW 상태관리
    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    //로그인 관리
    const [ loginStatus, setLoginStatus ] = useState('');

    //onChange 이벤트
    //-ID
    const onChangeId = (e) => {
        setUserName(e.target.value);
    }
    //-PW
    const onChangePw = (e) => {
        setUserPassword(e.target.value);
    }

    axios.defaults.withCredentials = true;

    //로그인 버튼 - onSubmit 이벤트
    const onSubmit= (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8000/login', {
        axios.post(`${API_URL}/login`, {
            username: userName,         // 여기 username과 server의 로그인에서 req.body 뒤에 오는 애 username이어야함(req.body.username 이어야함) 
            userpassword: userPassword  // 여기 userpassword과 server의 로그인에서 req.body 뒤에 오는 애 userpassword이어야함(req.body.userpassword 이어야함) 
            // userid: userName,
            // pw: userPassword
        })
        .then(res =>{
            console.log(res);
            if(res.data.message) {
                // console.log(res.data);
                setLoginStatus(res.data.message);
                alert("잘못된 아이디와 비밀번호 입니다.");
            } else {
                setLoginStatus(res.data[0].userid + ' 로그인 성공');
                navigate('/');
            }
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    //get방식으로 login 보내기  -- cookie 생성하기
    useEffect(()=>{
        // axios.get("http://localhost:8000/login")
        axios.get(`${API_URL}/login`)
        .then(response=>{
            // console.log(response);    // 콘솔창에,   user: Array(1) 0: {userid: 'ddddd', pw: '1234', name: '김블루', gender: '여자', phone: 10, …} 담김
                    // eslint-disable-next-line
            if(response.data.loggedIn == true){
                setLoginStatus(response.data.user[0].userid);
            }
        })
    },[])
    // 쿠키가 유지됨에 따라 로그인 버튼을 로그아웃 버튼으로 바꾸어 주기
    // --> Aside.js에서 하기!



    // const [inputId, setInputId] = useState('');     //ID
    // const [inputPw, setInputPw] = useState('');     //PW

    // //onChange 이벤트
    // // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    // const onChangeId = (e) => {
    //     setInputId(e.target.value);
    // }
    // const onChangePw = (e) => {
    //     setInputPw(e.target.value);
    // }
  
	// // login 버튼 클릭 이벤트
    // const onClickLogin = () => {
    //     // console.log('click login');
    //     axios.post('/onLogin', null, {
    //         params: {
    //             'userid': inputId,
    //             'pw': inputPw
    //         }
    //     })
    //     .then(res => console.log(res))
    //     .catch()
    // }
    // // 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('http://localhost:8000/login')
    //     .then(res => console.log(res))
    //     .catch()
    // },[])   // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    return (
        <div id='LoginContent'>
            <h2>W wedding</h2>
            <form id="inputs" onSubmit={onSubmit}>
                <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='c_id'
                onChange={onChangeId} value={userName}/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='c_password'
                onChange={onChangePw} value={userPassword} />
                {/* <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='input_id' value={inputId} onChange={onChangeId}/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='input_pw' value={inputPw} onChange={onChangePw} /> */}
                <ul>
                    <li><Link to="/register">회원가입</Link></li>
                    <li>ID/PW 찾기</li>
                 </ul>
                 <button type='submit'>LOGIN</button>
                 {/* <button type='submit' onClick={onClickLogin}>LOGIN</button> */}
            </form>
                {/* <h1 className='logStatus'>{loginStatus}</h1> */}
            <div id='log'>
                <h1 className='logStatus'>{loginStatus}</h1>
            </div>
        </div>
    );
};

export default Login;