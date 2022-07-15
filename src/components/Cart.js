import React from 'react';
import './CartCss.css';

const Cart = () => {
    return (
        <div id='cartInner'>
            <h2>Cart</h2>
            <div id='cartContent'>
                <table id='cartTable'>
                    <tr>
                        <td><img src='images/dress1.png' alt=''/></td>
                        <td>pink dress</td>
                        <td>12,000,000won</td>
                        <td>1개</td>
                        <td>12,000,000won</td>
                    </tr>
                    <tr>
                        <td><img src='images/dress1.png' alt=''/></td>
                        <td>pink dress</td>
                        <td>12,000,000won</td>
                        <td>1개</td>
                        <td>12,000,000won</td>
                    </tr>
                    <tr>
                        <td><img src='images/dress1.png' alt=''/></td>
                        <td>pink dress</td>
                        <td>12,000,000won</td>
                        <td>1개</td>
                        <td>12,000,000won</td>
                    </tr>
                </table>
                <div id="cartReceipt">
                    <h3>CART TOTALS</h3>
                    <table>
                        <tr>
                            <td>SUBTOTAL</td>
                            <td>12,000,000won</td>
                        </tr>
                        <tr>
                            <td>SHIPPING</td>
                            <td>FREE SHIPPING</td>
                        </tr>
                        <tr>
                            <td>TOTAL</td>
                            <td>12,000,000won</td>
                        </tr>
                    </table>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;