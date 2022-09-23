import React from 'react';
import { API_URL } from './config/contansts';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

const CartList = ({cart}) => {
    // const navigate = useNavigate();

    const onDelete = () => {
        const delId = cart.id
        // axios.delete(`http://localhost:8000/delDress/${id}`)
        axios.delete(`${API_URL}/delCart`,{
            data:{
                id:delId
            }
        })
        .then(res=>{
            console.log("삭제완료");
            // navigate('/cart');
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
            <tr>
                <td style={{width:"14%"}}><img src={`${API_URL}/${cart.imgsrc}`} alt=""/></td>
                <td style={{width:"20%"}}>{cart.name}</td>
                <td style={{width:"20%"}}>{cart.price.toLocaleString('ko-KR')}won</td>
                <td style={{width:"6%"}}>{cart.size}</td>
                <td style={{width:"10%"}}>{cart.amount}개</td>
                <td style={{width:"20%"}}>{(cart.price*cart.amount).toLocaleString('ko-KR')}won</td>
                <td style={{width:"10%"}}>
                    <form onSubmit={onDelete}>
                        <button type="submit"><FiTrash2/></button>
                    </form>
                </td>
            </tr>
        </>
    );
};

export default CartList;