import React from 'react';
import './LoginCss.css';

const Login = () => {
    return (
        <div id='LoginContent'>
            <h2>LOGIN</h2>
            <div id="inputs">
                <input type="text" />
                <input type="password" />
                <ul>
                    <li>회원가입</li>
                    <li>ID/PW 찾기</li>
                 </ul>
                 <button>LOGIN</button>
            </div>
        </div>
    );
};

export default Login;