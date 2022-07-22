// import React, { useEffect, useState, useRef } from 'react';
import React, { useEffect, useState } from 'react';
import './ShopCss.css';
import axios from 'axios';
import ShopList from './ShopList';
import { useParams } from 'react-router-dom';
import { API_URL } from './config/contansts';

const ShopSearch = () => {
    //mysql로 데이터 불러오기
    const [ dresses, setDresses ] = useState([]);
    const [ alldresses, setallDresses ] = useState([]);
    const { type } = useParams();
    // const [ dressAll, setDressAll ] = useState([]);
    useEffect(()=>{ 
        // axios.get(`http://localhost:8000/dress/${type}`)
        axios.get(`${API_URL}/dress/${type}`)
        .then((result)=>{
            const dresses = result.data;
            console.log(dresses)
            setallDresses(dresses)
            setDresses(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
    // eslint-disable-next-line
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
                    <ShopList key={dress.type} dress={dress}/>
                ))} 
            </ul>
        </div>
    );
};

export default ShopSearch;