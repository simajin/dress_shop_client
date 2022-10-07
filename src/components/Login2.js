import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from './config/contansts';
import { setCookie } from './util/cookie';
import { setLogin } from './modules/logincookie';
// import { setLogin, goToHome } from '../modules/logincookie';
import './LoginCss.css';

// ⚡cookie 이용 로그인
const Login2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); //npm install react-redux

    // 로그인 상태관리
    const [ loginData, setLoginData ] = useState({
        c_id: "",
        c_password: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData ({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.c_id === '' || loginData.c_password === ''){
            alert('아이디와 비밀번호를 확인해주세요 ');
        }else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                let userid = result.data.userid;
                let username = result.data.username;
                console.log(result);
                
                if(userid !== null && userid !== '' && userid !== undefined){
                    alert('로그인되었습니다.')
                    const expires = new Date();
                    expires.setMinutes(expires.getMinutes()+60);
                    setCookie('userid', `${userid}`, {path: '/', expires})   // 맨 앞의 'userid'가 쿠키 이름
                    setCookie('username', `${username}`, {path: '/', expires}) // 맨 앞의 'username' 쿠키 이름
                    dispatch(setLogin())
                    // dispatch(goToHome(navigate))
                    navigate('/');
                }else {
                    alert('아이디와 비밀번호를 확인해주세요 ');
                }
            })
            .catch(e=>{
                alert('아이디와 비밀번호를 확인해주세요 ');
            })
        }
    }


    return (
        <div id='LoginContent'>
            <h2>W wedding</h2>
            <form id="inputs" onSubmit={onSubmit}>
                <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='c_id'
                value={loginData.c_id} onChange={onChange}/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='c_password'
                value={loginData.c_password} onChange={onChange}/>
                <ul>
                    <li><Link to="/register">회원가입</Link></li>
                    <li>ID/PW 찾기</li>
                 </ul>
                 <button type='submit'>LOGIN</button>
                 {/* <button type='submit' onClick={onClickLogin}>LOGIN</button> */}
            </form>
        </div>
    );
};

export default Login2;