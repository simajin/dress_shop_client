import React from 'react';
import { Link } from 'react-router-dom';
import './LoginCss.css';

const Login = () => {
    return (
        <div id='LoginContent'>
            <h2>W wedding</h2>
            <form id="inputs">
                <i className="material-icons">account_circle</i><input type="text" placeholder='ID'/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' />
                <ul>
                    <li><Link to="/register">회원가입</Link></li>
                    <li>ID/PW 찾기</li>
                 </ul>
                 <button>LOGIN</button>
            </form>
        </div>
    );
};

export default Login;