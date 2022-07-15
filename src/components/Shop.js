import React from 'react';
import './ShopCss.css';
const Shop = (props) => {
    return (
        <div id="shop">
            <ul id='shopLeft'>
                <li>SIGNATURE</li>
                <li>Belline</li>
                <li>Mermaid</li>
            </ul>
            <ul id='shopRight'>
                <li><img src='images/dress1.png' alt=''/></li>
                <li><img src='images/dress2.png' alt=''/></li>
                <li><img src='images/dress3.png' alt=''/></li>
                <li><img src='images/dress4.png' alt=''/></li>
                <li><img src='images/dress5.png' alt=''/></li>
                <li><img src='images/dress6.png' alt=''/></li>
            </ul>
        </div>
    );
};

export default Shop;