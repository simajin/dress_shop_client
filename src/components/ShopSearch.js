import React, { useEffect, useState, useRef } from 'react';
import './ShopCss.css';
import axios from 'axios';
import ShopList from './ShopList';
import { useParams } from 'react-router-dom';


const ShopSearch = ({belline}) => {
    //mysql로 데이터 불러오기
    const [ dresses, setDresses ] = useState([]);
    const [ alldresses, setallDresses ] = useState([]);
    const { type } = useParams();
    // const [ dressAll, setDressAll ] = useState([]);
    useEffect(()=>{ 
        axios.get(`http://localhost:8000/dress/${type}`)
        .then((result)=>{
            const dresses = result.data;
            console.log(dresses)
            setallDresses(dresses)
            setDresses(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
        //카테고리
        function tBelline(){ setDresses(alldresses.filter(e=>e.type==="belline"))}
        function tMermaid(){ setDresses(alldresses.filter(e=>e.type==="mermaid"))}
        function tSig(){ setDresses(alldresses.filter(e=>e.type))}

    if(dresses === []) return <div>로딩중...</div>

    return (
        <div id="shop">
            {/* <form onSubmit={={e=></div>onSearch(e)}}> */}
                <ul id='shopLeft'>
                    <li id='sig' onClick={tSig}>SIGNATURE</li>
                    <li id='bLine' onClick={tBelline}>Bellline</li>
                    <li id='mMaid' onClick={tMermaid}>Mermaid</li>
                </ul>
            {/* </form> */}
            <ul id='shopRight'>
                {dresses.map(dress=>(
                    <ShopList key={dress.id} dress={dress}/>
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

export default ShopSearch;