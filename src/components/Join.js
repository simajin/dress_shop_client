import React, { useState } from 'react';
import './Join.css';
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const Join = () => {
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
    //주소 onChange 함수
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <form id='joinForm'>
            <h2>JOIN</h2>
            <table id='joinTable'>
                <tr className='tableTr'>
                    <td>아이디 : </td>
                    <td><input type="text" name='c_id' placeholder="ID 4~19words" value={formData.c_id}/></td>
                </tr>
                <tr className='tableTr'>
                    <td>비밀번호 : </td>
                    <td><input type="password" name='c_password' placeholder='Password' value={formData.c_password} /></td>
                </tr>
                <tr className='tableTr'>
                    <td>비밀번호 확인 : </td>
                    <td><input type="password" name='c_pwch' placeholder='Password Again' value={formData.c_pwch} /></td>
                </tr>
                <tr className='tableTr'>
                    <td>이름 : </td>
                    <td><input type="text" name='c_name' placeholder='Name' value={formData.c_name}/></td>
                </tr>
                <tr className='tableTr'>
                    <td>성별 : </td>
                    <td>
                        여<input type="radio" name='c_gender' value="여자" className='gender'/>
                        남<input type="radio" name='c_gender' value="남자" className='gender'/>
                    </td>
                </tr>
                <tr className='tableTr'>
                    <td>전화번호 : </td>
                    <td className='phoneNum'>
                        <input type="text" className='phone' name='c_phone'/>
                        <span>-</span>
                        <input type="text" className='phone' name='c_phone2' />
                        <span>-</span>
                        <input type="text" className='phone' name='c_phone3' />
                    </td>
                </tr>
                <tr className='tableTr'>
                    <td>주소 : </td>
                    <td>
                        <input name="c_add" type="text" value={formData.c_add} onChange={onChange} />
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
                    <td>이메일 : </td>
                    <td><input type="email" placeholder='Email' /></td>
                </tr>
                <tr className='tableTr tableSubmit'>
                    <td colSpan="2">
                        <button type='submit'>등록</button>
                        <button type='cancel'>취소</button>
                    </td>
                </tr>
            </table>
        </form>
    );
};

export default Join;