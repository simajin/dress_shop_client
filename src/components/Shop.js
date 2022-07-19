import React, { useEffect, useState } from 'react';
import './ShopCss.css';
import axios from 'axios';
import ShopList from './ShopList';

const Shop = (props) => {
    //mysql로 데이터 불러오기
    const [ dresses, setDresses ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/dresses")
        .then((result)=>{
            const dresses = result.data;
            setDresses(dresses);
            console.log(dresses);
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    if(dresses === []) return <div>로딩중...</div>

    // 검색기능


    return (
        <div id="shop">
            {/* <form onSubmit={={e=></div>onSearch(e)}}> */}
                <ul id='shopLeft'>
                    <li>SIGNATURE</li>
                    <li>Bellline</li>
                    <li>Mermaid</li>
                </ul>
            {/* </form> */}
            <ul id='shopRight'>
                {dresses.map(dress=>(
                    <ShopList key={dress.id} dress={dress} />
                ))} 
            </ul>
            {/* <ul id='shopRight'>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress1.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress2.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress3.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress4.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress5.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress6.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress7.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress8.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
                <li>
                    <div className='shopImg'>
                        <img src='images/dress9.png' alt=''/>
                    </div>
                    <div className='shopText'>
                        <p>WHITE OPHERA (SS22)</p>
                        <span>12,000,000 won</span>
                    </div>
                </li>
            </ul> */}
        </div>
    );
};

export default Shop;