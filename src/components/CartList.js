import React ,{ useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const CartList = ({cart}) => {

    return (
        <>
            <tr>
                <td><img src={cart.imgsrc} art=""/></td>
                <td>{cart.name}</td>
                <td>{cart.price.toLocaleString('ko-KR')}won</td>
                <td>{cart.amount}개</td>
                <td>{(cart.price*cart.amount).toLocaleString('ko-KR')}won</td>
            </tr>
        </>
    );
};

export default CartList;