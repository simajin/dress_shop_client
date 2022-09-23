import React, { useEffect } from 'react';
import { VscInfo, VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const Footer = () => {
    let info = 1;
    function showFooter(){
        const footerMenu = document.querySelector("#hideFooter");
        const footerBtn = document.querySelector("#footerBtn");
        
        if(info === 1){
            footerMenu.style.bottom ="0";
            footerMenu.style.transition = "0.5s";
            setTimeout(()=>{
                footerBtn.style.color = "#666";
            },200)
            info = 0 ;
        }else if(info === 0){
            footerMenu.style.bottom ="-150px";
            footerMenu.style.transition = "0.5s";
            setTimeout(()=>{
                footerBtn.style.color = "#fff";
            },200)
            info = 1;
        }
        return info;
        
    }
    function toTheTop(){
        window.scrollTo(0,0);
    }
    function toTheBot(){
        window.scrollTo(0,document.body.scrollHeight);
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const footerMenu = document.querySelector("#hideFooter");
            const footerBtn = document.querySelector("#footerBtn");
            const scrollHeight = document.body.scrollHeight-window.innerHeight
            console.log(window.scrollY);
            console.log(scrollHeight)
            if(window.scrollY >= scrollHeight){
                footerMenu.style.bottom = "0";
                footerMenu.style.transition = "0.5s";
                setTimeout(()=>{
                    footerBtn.style.color = "#666";
                },200)
                // eslint-disable-next-line
                info = 0;
            }else{
                footerMenu.style.bottom = "-150px";
                footerMenu.style.transition = "0.5s";
                setTimeout(()=>{
                    footerBtn.style.color = "#fff";
                },200)
                info = 1;
            }
            return info;
        })
    },[])
    return (
        <div id="footer">
            <button id="footerBtn" onClick={showFooter}><VscInfo/></button>
            <button id="goTopBtn" onClick={toTheTop}><VscTriangleUp/></button>
            <button id="goBotBtn" onClick={toTheBot}><VscTriangleDown/></button>
            <div id='hideFooter'>
                <div id='footerInner'>
                    <p>2022 © W Wedding. All Rights Reserved.</p>
                    <p>법인명 : (주)더블유 웨딩 │ 사업자등록번호: 111-23-445678</p>
                    <p>대표번호 : <span>052-123-0000</span> │주소: 울산광역시 남구 삼산로 1│ 대표자명: 김예진</p>
                </div>
                <h1 id='logoBot'><svg id="wLogoBot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50"><path id="logoLineBot" className="cls-2" d="M28.36,26S8.5,30.5,5.5,19.5s29-18,30-4a243.83,243.83,0,0,1,0,29h1.65S49.53,21.76,49.52,24.63,52.29,43.5,60.4,44.5s-1.9-11,14.1-40"/></svg></h1>
            </div>
        </div>
    );
};

export default Footer;