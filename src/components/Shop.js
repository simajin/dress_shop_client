import React, { useEffect, useState } from 'react';
import './ShopCss.css';
import axios from 'axios';
import ShopList from './ShopList';
// import { Link } from 'react-router-dom';


const Shop = () => {
    //mysql로 데이터 불러오기
    const [ dresses, setDresses ] = useState([]);
    const [ alldresses, setallDresses ] = useState([]);
    // const [ dressAll, setDressAll ] = useState([]);
    useEffect(()=>{ 
        axios.get("http://localhost:8000/dresses")
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

    // 카테고리
    function tBelline(){ setDresses(alldresses.filter(e=>e.type==="belline")) }
    function tMermaid(){ setDresses(alldresses.filter(e=>e.type==="mermaid")) }
    function tSig(){ setDresses(alldresses.filter(e=>e.type)) }

    // 서치 눌렀을때 나타내기
    let showSearch = false;
    function searchClick(){
        const shopSearch = document.querySelector('#shopSearch');
        if(showSearch === false){
            shopSearch.style.opacity = "1";
            shopSearch.style.transition = "0.5s";
            showSearch = true;
        }else{
            shopSearch.style.opacity = "0";
            shopSearch.style.transition = "0.5s";
            showSearch = false;
        }
        return showSearch;
    }

    // 서치 카테고리(사이즈)
    function sizeS() { setDresses(alldresses.filter(e=>e.size1!="0")) }
    function sizeM() { setDresses(alldresses.filter(e=>e.size2!="0")) }
    function sizeL() { setDresses(alldresses.filter(e=>e.size3!="0")) }

    // 서치 카테고리(시즌)
    function seasonSS22() { setDresses(alldresses.filter(e=>e.name.includes("SS22") )) }
    function seasonSS21() { setDresses(alldresses.filter(e=>e.name.includes("SS21") )) }
    function seasonFW21() { setDresses(alldresses.filter(e=>e.name.includes("FW21") )) }

    if(dresses === []) return <div>로딩중...</div>

    return (
        <div id="shop">
            <ul id='shopLeft'>
                <li id='sig' onClick={tSig}>SIGNATURE</li>
                <li id='bLine' onClick={tBelline}>Bellline</li>
                <li id='mMaid' onClick={tMermaid}>Mermaid</li>
                <li>
                    <p onClick={searchClick}>Category</p>
                    <ul id='shopSearch'>
                        <li>
                            <ul id='shopType'>
                                <li className='search'>Type : </li>
                                <li onClick={tBelline}>Bellline</li>
                                <li onClick={tMermaid}>Mermaid</li>
                            </ul>
                            <ul id='shopSize'>
                                <li className='search'>Size : </li>
                                <li onClick={sizeS}>S</li>
                                <li onClick={sizeM}>M</li>
                                <li onClick={sizeL}>L</li>
                            </ul>
                            <ul id='shopSeason'>
                                <li className='search'>Season : </li>
                                <li onClick={seasonSS22}>SS22</li>
                                <li onClick={seasonFW21}>FW21</li>
                                <li onClick={seasonSS21}>SS21</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
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

export default Shop;