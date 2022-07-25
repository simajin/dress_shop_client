import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailDress.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_URL } from './config/contansts';

const DetailDress = () => {
    const navigate = useNavigate();
    // const slt = document.querySelector("#slt");
    // const opQtt = document.querySelectorAll(".qtt");
    // const qttNum = document.querySelector("#qttNum");
    const [ dress, setDress ] = useState(null);
    const { id } = useParams();             // id값 받아오기
    //상태관리 - 이미지 변경
    const detailImg = document.querySelectorAll(".detailImg");
    const [ mainImg, setMainImg ] = useState('');
    const [ maxQtt, setMaxQtt] = useState('');
    // const [ qtt , setQtt ] = useState('');
    const [ currentImg, setCurrentImg ] = useState(0);
    const [ cartData, setCartData ] = useState();
    useEffect(()=>{
        // axios.get(`http://localhost:8000/dress/${id}`)
        axios.get(`${API_URL}/dress/${id}`)
        .then(result => {
            console.log(result);
            const resulta = result.data;
            setDress(resulta[0]); 
            // setMainImg('http://localhost:3000/'+resulta[0].imgsrc);
            // setMainImg(`https://dress-shop-client-eight.vercel.app/${resulta[0].imgsrc}`);
            // setMainImg(`https://dress-shop-client-eight.vercel.app/${resulta[0].imgsrc}`);
            setMainImg("../"+resulta[0].imgsrc);
            setMaxQtt(resulta[0].size1); 
            setCartData({
                    c_img : resulta[0].imgsrc,
                    c_name : resulta[0].name,
                    c_price : resulta[0].price,
                    c_size : "",
                    // c_amount : qtt,
                    c_amount : "",
                    c_userid : "",
            });
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
    //상품 삭제
    const onDelete = () => {
        // axios.delete(`http://localhost:8000/delDress/${id}`)
        axios.delete(`${API_URL}/delDress/${id}`)
        .then(res=>{
            console.log("삭제완료");
            navigate('/shop');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    // const amountChange = ()=>{
    //     setCartData(
    //         ...cartData,
    //     )
    // }
    //카트 추가
    const addToCart = ()=>{
        // axios.post(`http://localhost:8000/addToCart`, cartData)
        axios.post(`${API_URL}/addToCart`, cartData)
        .then(res=>{
            console.log("카트추가완료");
            if( window.confirm("장바구니에 담겼습니다. 장바구니로 가시겠습니까?")){
                navigate('/cart');
                console.log("옙")
            }else{
                console.log("놉")
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const selectOnChange = (e) => {
        const { value } = e.target
        let num = "S"
        console.log('여기에요')
       
        if(value==="1"){
            setMaxQtt(dress.size1)
            num = "S"
          
        }else if(value==="2"){
            setMaxQtt(dress.size2)
            num = "M"
         
        }else {
            setMaxQtt(dress.size3)
            num = "L"
           
        }
        setCartData({
            ...cartData,
            c_size : num
        })
        console.log(num)
    }
    const qttChange = (e)=>{
        setCartData({
            ...cartData,
            c_amount : e.target.value,
        })
    }
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
                        {/* <select id='slt' onChange={ e =>{
                            e.target.value === "1" ?  setMaxQtt(dress.size1) : e.target.value === "2" ? setMaxQtt(dress.size2) : setMaxQtt(dress.size3);
                            e.target.value === "1" ?  setSize("S") : e.target.value === "2" ? setSize("M") : setSize("L");
                            setCartData({
                                ...cartData,
                                c_size : size
                            })
                            
                            console.log(cartData.c_size)
                        }}> */}
                        <select id='slt' onChange={selectOnChange}>
                            <option value="1" className='opQtt'>S</option>
                            <option value="2" className='opQtt'>M</option>
                            <option value="3" className='opQtt'>L</option>
                        </select>
                        <input id='qttNum' type="number" min="0" max={maxQtt} onChange={qttChange} />
                        <button onClick={addToCart}>ADD TO CART</button>
                        <div>
                            <button id='editBtn'><Link to={`/editDress/${dress.id}`}>EDIT</Link></button>
                            <button id='deleteBtn' onClick={onDelete}>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='desc'>
                <div id='descText'>
                    <h3>DESCRIPTION</h3>
                    <p>
                        {dress.desc1}
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