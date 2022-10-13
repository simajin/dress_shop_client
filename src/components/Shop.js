import React, { useEffect, useState } from 'react';
import './ShopCss.css';
import axios from 'axios';
import ShopList from './ShopList';
import { Link } from 'react-router-dom';
// import { API_URL } from './config/contansts';
import { getCookie } from './util/cookie';
import { API_URL } from './config/contansts';
import Loading from './loading/Loading';


const Shop = () => {
    // 관리자 로그인시
    const userid = getCookie('userid');
    console.log(userid);

    //mysql로 데이터 불러오기
    const [ dresses, setDresses ] = useState([]);
    const [ alldresses, setallDresses ] = useState([]);
    // const [ dressAll, setDressAll ] = useState([]);
    //*로딩상태 - useState로 상태관리
    const [loading, setLoading] = useState(true);
    useEffect(()=>{ 
        // axios.get("http://localhost:8000/dresses")
        // axios.get(`https://dress-shop-server.herokuapp.com/dresses`)
        axios.get(`${API_URL}/dresses`)
        .then(result=>{
            const dresses = result.data;
            console.log(dresses)
            console.log(result.data)
            setallDresses(result.data)
            setDresses(result.data)
            setLoading(false);  //렌더링이 완료(dresses데이터들을 다 불러오면)가 되면 setLoading은 false
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    if(loading)  return <div><Loading/></div>;  
    
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
            // eslint-disable-next-line
    function sizeS() { setDresses(alldresses.filter(e=>e.size1!="0")) }
            // eslint-disable-next-line
    function sizeM() { setDresses(alldresses.filter(e=>e.size2!="0")) }
            // eslint-disable-next-line
    function sizeL() { setDresses(alldresses.filter(e=>e.size3!="0")) }

    // 서치 카테고리(시즌)
    function seasonSS22() { setDresses(alldresses.filter(e=>e.name.includes("SS22"))) }
    function seasonSS21() { setDresses(alldresses.filter(e=>e.name.includes("SS21"))) }
    function seasonFW21() { setDresses(alldresses.filter(e=>e.name.includes("FW21"))) }

    

    //*로딩상태 - useState로 상태관리
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     setLoading(false);  //렌더링이 완료가 되면 setLoading은 false
    // },[]);
    // if(loading)  return <div><Loading/></div>;
    // if(dresses === []) return <div>{loading ? (<Loading/>) : "로딩중" }</div>
    // if(alldresses === []) return <div>{loading ? (<Loading/>) : "로딩중" }</div>
    // if(dresses === []) return <div><Loading/></div>
    // if(alldresses === []) return <div><Loading/></div>
    // if(!dresses && !alldresses) return <div>{loading ? (<Loading/>) : "로딩중" }</div>
    // if(!alldresses) return <div>{loading ? (<Loading/>) : "로딩중" }</div>
    // if(!dresses) return <div>{loading ? "로딩중" : (<Loading/>)}</div>
    // if(!alldresses) return <div>{loading ?  "로딩중" : (<Loading/>)}</div>
    // if(dresses == undefined) return <div><Loading/></div>
    // if(alldresses == undefined) return <div><Loading/></div>
    // if(!alldresses) return <div>{loading ?  "로딩중" : (<Loading/>)}</div>
    
        

    return (
        <div id="shop">
            <div id='shopWrap'>
                <ul id='shopLeft'>
                    <li id='sig' onClick={tSig}>SIGNATURE</li>
                    <li id='bLine' onClick={tBelline}>Bellline</li>
                    <li id='mMaid' onClick={tMermaid}>Mermaid</li>
                    {userid === 'admin' ?
                        <li id="upProduct"><Link to='/upload'>Upload Product</Link></li>
                    : ""}
                    <li id='category'>
                        <p onClick={searchClick}>Category</p>
                        <ul id='shopSearch'>
                            <li>
                                <ul id='shopType'>
                                    <li className='search'>Type: </li>
                                    <li onClick={tBelline}>Bellline</li>
                                    <li onClick={tMermaid}>Mermaid</li>
                                </ul>
                                <ul id='shopSize'>
                                    <li className='search'>Size: </li>
                                    <li onClick={sizeS}>S</li>
                                    <li onClick={sizeM}>M</li>
                                    <li onClick={sizeL}>L</li>
                                </ul>
                                <ul id='shopSeason'>
                                    <li className='search'>Season: </li>
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

            </div>
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