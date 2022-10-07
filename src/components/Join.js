import React, { useState } from 'react';
import './Join.css';
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import axios from 'axios';
import { API_URL } from './config/contansts';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate();
    // < 주소 > 
    //우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            c_add: data.address
        })
    }
    //팝업창 상태 관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);      
    //-팝업창 열기(true)       
    const openPostCode = () =>{
        setIsPopupOpen(true);                      
    }
    //-팝업창 닫음(false)
    const closePostCode = () =>{
        setIsPopupOpen(false);
    }


    const [ formData, setFormData ] = useState({
        c_id: "",
        c_password: "",
        c_pwch: "",
        c_name: "",
        c_gender: "",
        c_phone: "",
        c_phone2: "",
        c_phone3: "",
        c_add: "",
        c_adddetail: "",
        c_email: ""
    })
    // input - onChange 이벤트
    const onChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    //폼 - submit 이벤트  
    const onSubmit = (e) => {
        e.preventDefault();                        
        console.log(formData);
        //전화번호가 숫자인지 체크
        if(isNaN(formData.c_phone) || isNaN(formData.c_phone2) || isNaN(formData.c_phone3)){
            alert("전화번호는 숫자만 입력해주세요");
            setFormData({
                ...formData,
                c_phone:"",
                c_phone2:"",
                c_phone3:""
            })
        }
        //유효성검사 - 글자수 제한, 유의미한 데이터인지 파악 등
        //1. id의 길이(4-10자 입력)
        if(formData.c_id.length<4 || formData.c_id.length>=11) alert("ID가 양식에 적합하지 않습니다.");
        //2. 비밀번호의 최소길이 4글자 이상
        else if(formData.c_password.length<4 || formData.c_pwch.length<4) alert("비밀번호는 4자 이상 입력해주세요.");
        //3. 비밀번호와 비밀번호확인이 일치하는지
        else if(formData.c_password !== formData.c_pwch) alert("비밀번호가 일치하지 않습니다.");
        //4. 전화번호 phone은 3글자 / phone2, phone3은 4글자
        else if(formData.c_phone.length>=4 || formData.c_phone2.length>=5 || formData.c_phone3.length>=5 ) alert("전화번호 양식에 적합하지 않습니다.");
        //중복아이디 체크
        // else {
        //     if (formData.c_id===)
        // }
        //input에 값이 있는지 체크하고 (주소는 생략가능!!!)
        if(formData.c_id !== "" && formData.c_password !== "" && formData.c_pwch !== "" && formData.c_name !== "" && formData.c_gender !== "" &&
        formData.c_phone !== "" && formData.c_email !==""){
            insertJoin();
        }
    }
    //insertJoin 함수
    function insertJoin(){
        // axios.post("http://localhost:8000/join",formData)
        axios.post(`${API_URL}/join`,formData)
        .then(res=>{
            console.log(res);
            navigate('/');              
        })
        .catch(e=>{
            console.log(e);
        })
    }

    //취소 onClick 이벤트 
    const resetClick = (e) => {
        navigate(-1);
    }

    return (
        <form id='joinForm' onSubmit={onSubmit}>
            <div>
                <h2>JOIN</h2>
                <table id='joinTable'>
                    <tbody>
                        <tr className='tableTr'>
                            <td>아이디 </td>
                            {/* useState로 값을 주고 있는데 그걸 바꾸려면 onChange를 써서 바꿔줘야함! -> onChange 하나하나 다 걸어주기! */}
                            <td><i className="material-icons">account_circle</i><input type="text" id="userid" name='c_id' placeholder="ID 4~10words" value={formData.c_id} onChange={onChange} /></td>
                        </tr>
                        <tr className='tableTr'>
                            <td>비밀번호 </td>
                            <td><i className="material-icons">vpn_key</i><input type="password" name='c_password' placeholder='4자이상 입력해주세요' value={formData.c_password} onChange={onChange} /></td>
                        </tr>
                        <tr className='tableTr'>
                            <td>비밀번호 확인 </td>
                            <td><i className="material-icons">vpn_key</i><input type="password" name='c_pwch' placeholder='Password Again' value={formData.c_pwch} onChange={onChange} /></td>
                        </tr>
                        <tr className='tableTr'>
                            <td>이름 </td>
                            <td><input type="text" name='c_name' placeholder='Name' value={formData.c_name} onChange={onChange}/></td>
                        </tr>
                        <tr className='tableTr'>
                            <td>성별 </td>
                            <td className='tableGender'>
                                여<input type="radio" name='c_gender' value="여자" className='gender' onChange={onChange}/>
                                남<input type="radio" name='c_gender' value="남자" className='gender' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr className='tableTr'>
                            <td>전화번호 </td>
                            <td className='phoneNum'>
                                <input type="text" className='phone' name='c_phone' value={formData.c_phone} onChange={onChange} />
                                <span>-</span>
                                <input type="text" className='phone' name='c_phone2' value={formData.c_phone2} onChange={onChange} />
                                <span>-</span>
                                <input type="text" className='phone' name='c_phone3' value={formData.c_phone3} onChange={onChange} />
                            </td>
                        </tr>
                        <tr className='tableTr'>
                            <td id='tableAdd1'>주소 </td>
                            <td className='tableAdd'>
                                <input name="c_add" type="text" value={formData.c_add} onChange={onChange} placeholder="주소는 생략가능합니다." />
                                <input name="c_adddetail" type="text" value={formData.c_adddetail} onChange={onChange} />
                                <button type="button" onClick={openPostCode}>우편번호 검색</button>
                                <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode}
                                            onAddData={onAddData}
                                            />
                                        </PopupDom>
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr className='tableTr'>
                            <td>이메일 </td>
                            <td><i className="material-icons">email</i><input type="email" placeholder='Email' name="c_email" value={formData.c_email} onChange={onChange}/></td>
                        </tr>
                        <tr className='tableTr tableSubmit'>
                            <td colSpan="2">
                                <button type='submit'>등록</button>
                                <button type='cancel' onClick={resetClick}>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    );
};

export default Join;