import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <form id='joinForm'>
            <h2>JOIN</h2>
            <table id='joinTable'>
                <tr className='tableTr'>
                    <td>아이디 : </td>
                    <td><input type="text" name='userId' placeholder="아이디"/></td>
                </tr>
                <tr className='tableTr'>
                    <td>비밀번호 : </td>
                    <td><input type="password" name='userPw' placeholder='비밀번호' /></td>
                </tr>
                <tr className='tableTr'>
                    <td>비밀번호 확인 : </td>
                    <td><input type="password" name='userPwCh' placeholder='비밀번호 확인' /></td>
                </tr>
                <tr className='tableTr'>
                    <td>이름 : </td>
                    <td><input type="text" name='name' placeholder='이름'/></td>
                </tr>
                <tr className='tableTr'>
                    <td>성별 : </td>
                    <td>
                        여<input type="radio" name='gender' value="여자" className='gender'/>
                        남<input type="radio" name='gender' value="남자" className='gender'/>
                    </td>
                </tr>
                <tr className='tableTr'>
                    <td>전화번호 : </td>
                    <td className='phoneNum'>
                        <input type="text" className='phone' />
                        <span>-</span>
                        <input type="text" className='phone' />
                        <span>-</span>
                        <input type="text" className='phone' />
                    </td>
                </tr>
                <tr className='tableTr'>
                    <td>주소 : </td>
                    <td></td>
                </tr>
                <tr className='tableTr'>
                    <td>이메일 : </td>
                    <td><input type="email" placeholder='이메일' /></td>
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