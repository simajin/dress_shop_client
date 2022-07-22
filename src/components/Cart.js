import React, { useEffect,useState } from 'react';
import './CartCss.css';
import axios from 'axios';
import CartList from './CartList';
// import { Link } from 'react-router-dom';
import { API_URL } from './config/contansts';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    //  mysql로 데이터 불러오기
     const [ carts, setCarts ] = useState([]);
     useEffect(()=>{
        // axios.get(`http://localhost:8000/cart`)
        axios.get(`${API_URL}/cart`)
        .then((result) => {
            const carts = result.data;
            console.log(carts);
            setCarts(result.data); 
            console.log(carts)
            let totalNum = 0;
   
            result.data.forEach(data => {
                 totalNum = totalNum+(data.price*Number(data.amount));
                console.log(data.price)
                setTotalPrice(totalNum)
            });
    
           
        })   
        .catch(e=> {
            console.log(e);
        })
       
    },[])
    if(!carts) return <div>로딩중...</div>
    
    return (
        <div id='cartInner'>
            <h2>Cart</h2>
            <div id='cartContent'>
                <table id='cartTable'>
                    <tbody>
                        {carts.map(cart=>(
                            <CartList key={cart.id} cart={cart} />
                        ))}
                    </tbody>
                </table>
                    <div id="cartReceipt">
                        <h3>CART TOTALS</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>SUBTOTAL</td>
                                    <td>{totalPrice.toLocaleString('ko-KR')}won</td>
                                </tr>
                                <tr>
                                    <td>SHIPPING</td>
                                    <td>FREE SHIPPING</td>
                                </tr>
                                <tr>
                                    <td>TOTAL</td>
                                    <td>{totalPrice.toLocaleString('ko-KR')}won</td>
                                </tr>
                        </tbody>
                    </table>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;