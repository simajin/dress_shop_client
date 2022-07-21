import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailDress.css'

const DetailDress = () => {
    // const navigate = useNavigate();
    // const slt = document.querySelector("#slt");
    // const opQtt = document.querySelectorAll(".qtt");
    // const qttNum = document.querySelector("#qttNum");
    const [ dress, setDress ] = useState(null);
    const { id } = useParams();             // id값 받아오기
    //상태관리 - 이미지 변경
    const detailImg = document.querySelectorAll(".detailImg");
    const [ mainImg, setMainImg ] = useState('');
    const [ qtt, setQtt] = useState('')
    const [ currentImg, setCurrentImg ] = useState(0);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/dress/${id}`)
        .then(result => {
            console.log(result);
            const resulta = result.data;
            setDress(resulta[0]); 
            setMainImg('http://localhost:3000/'+resulta[0].imgsrc);
            setQtt(resulta[0].size1); 
        })   
        .catch(e=> {
            console.log(e);
            console.log("dddd")
        })
        // eslint-disable-next-line
    },[])
    if(!dress) return <div>로딩중...</div>
    setInterval(() => {
        if(currentImg === 6){
            setCurrentImg(0);
        }else if(currentImg<6){
            setCurrentImg((current)=>current+1)
        }
    }, 4000);
    return (
        <div id='detail'>
            <div id='detailHead'>
                <div id='detailLeft'>
                    <ul id='imgList'>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src);
                                for(let i=0;i<detailImg.length;i++){
                                    detailImg[i].style.filter = "none";
                                    detailImg[i].style.border = "none";
                                }
                                e.target.style.filter = "grayscale(80%)";
                                e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc2} alt="" className='detailImg' /></li>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src)
                            for(let i=0;i<detailImg.length;i++){
                                detailImg[i].style.filter = "none";
                                detailImg[i].style.border = "none";
                            }
                            e.target.style.filter = "grayscale(80%)";
                            e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc} alt="" className='detailImg' /></li>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src)
                            for(let i=0;i<detailImg.length;i++){
                                detailImg[i].style.filter = "none";
                                detailImg[i].style.border = "none";
                            }
                            e.target.style.filter = "grayscale(80%)";
                            e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc3} alt="" className='detailImg' /></li>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src)
                            for(let i=0;i<detailImg.length;i++){
                                detailImg[i].style.filter = "none";
                                detailImg[i].style.border = "none";
                            }
                            e.target.style.filter = "grayscale(80%)";
                            e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc} alt="" className='detailImg' /></li>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src)
                            for(let i=0;i<detailImg.length;i++){
                                detailImg[i].style.filter = "none";
                                detailImg[i].style.border = "none";
                            }
                            e.target.style.filter = "grayscale(80%)";
                            e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc2} alt="" className='detailImg' /></li>
                        <li><img onClick={(e)=>{
                            setMainImg(e.target.src)
                            for(let i=0;i<detailImg.length;i++){
                                detailImg[i].style.filter = "none";
                                detailImg[i].style.border = "none";
                            }
                            e.target.style.filter = "grayscale(80%)";
                            e.target.style.border = "2px solid #fff"
                            }} src={"../"+dress.imgsrc3} alt="" className='detailImg' /></li>
                    </ul>
                    <img src={mainImg} alt='' id='mainDetail'/>
                </div>
                <div id='detailRight'>
                    <div>
                        <h2 onChange={()=>{
                            
                        }}>{dress.name}</h2>
                        <p>{dress.price.toLocaleString('ko-KR')} won</p>
                    </div>
                    <ul>
                        <li><h3>MEASUREMENTS</h3></li>
                        <li>US 2-4 / IT 32-34 / KR 44-55 / size – S <span>재고 :  {dress.size1}</span></li> 
                        <li>US 6-8 / IT 36-38 / KR 55-66 / size – M <span>재고 :  {dress.size2}</span></li>
                        <li>US 10 / IT 40 / KR 66-77 / size – L <span>재고 :  {dress.size3}</span></li>
                    </ul>
                    <div>
                        <select id='slt' onChange={ e =>{
                            e.target.value === "1" ?  setQtt(dress.size1) : e.target.value === "2" ? setQtt(dress.size2) : setQtt(dress.size3)
                            console.log(qtt)
                        }}>
                            <option value="1" className='opQtt'>S</option>
                            <option value="2" className='opQtt'>M</option>
                            <option value="3" className='opQtt'>L</option>
                        </select>
                        <input id='qttNum' type="number" min="0" max={qtt} />
                        <button>ADD TO CART</button>
                        <div>
                            <button id='editBtn'>EDIT</button>
                            <button id='deleteBtn'>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='desc'>
                <div id='descText'>
                    <h3>DESCRIPTION</h3>
                    <p>
                        {dress.desc}
                    </p>
                    <p>
                        {dress.desc2}
                    </p>
                </div>
                <ul>
                    <li><img src={"../"+dress.imgsrc} alt="" /></li>
                    <li><img src={"../"+dress.imgsrc2} alt="" /></li>
                    <li><img src={"../"+dress.imgsrc3} alt="" /></li>
                    <li><img src={"../"+dress.imgsrc} alt="" /></li>
                    <li><img src={"../"+dress.imgsrc2} alt="" /></li>
                    <li><img src={"../"+dress.imgsrc3} alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default DetailDress;