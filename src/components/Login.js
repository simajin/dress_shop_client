import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginCss.css';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Params } from 'react-router-dom';

const Login = () => {
    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    //onChange 이벤트
    //ID
    const onChangeId = (e) => {
        setUserName(e.target.value);
    }
    //PW
    const onChangePW = (e) => {
        setUserPassword(e.target.value);
    }

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
            <form id="inputs">
                <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='input_id'
                onClick={onChangeId}/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='input_pw'
                onClick={onChangePW}/>
                {/* <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='input_id' value={inputId} onChange={onChangeId}/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='input_pw' value={inputPw} onChange={onChangePw} /> */}
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

export default Login;