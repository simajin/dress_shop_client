import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailDress.css'

const DetailDress = () => {
    // const navigate = useNavigate();
    // const slt = document.querySelector("#slt");
    // const qtt = document.querySelectorAll(".qtt");
    const qttNum = document.querySelector("#qttNum");
    const [ dress, setDress ] = useState(null);
    const { id } = useParams();             // id값 받아오기
    useEffect(()=>{
        axios.get(`http://localhost:8000/dress/${id}`)
        .then(result => {
            console.log(result);
            const resulta = result.data;
            setDress(resulta[0]);  
        })   
        .catch(e=> {
            console.log(e);
            console.log("dddd")
        })
    // eslint-disable-next-line
    },[])
    if(!dress) return <div>로딩중...</div>
    return (
        <div id='detail'>
            <div id='detailHead'>
                <div id='detailLeft'>
                    <ul id='imgList'>
                        <li><img src={"../"+dress.imgsrc} alt="" className='detailImg' /></li>
                        <li><img src={"../"+dress.imgsrc2} alt="" className='detailImg' /></li>
                        <li><img src={"../"+dress.imgsrc3} alt="" className='detailImg' /></li>
                        <li><img src={"../"+dress.imgsrc} alt="" className='detailImg' /></li>
                        <li><img src={"../"+dress.imgsrc2} alt="" className='detailImg' /></li>
                        <li><img src={"../"+dress.imgsrc3} alt="" className='detailImg' /></li>
                    </ul>
                    <img src={"../"+dress.imgsrc} alt='' id='mainDetail'/>
                </div>
                <div>
                    <h2>{dress.name}</h2>
                    <p>{dress.price}</p>
                    <ul>
                        <li><h3>MEASUREMENTS</h3></li>
                        <li>US 2-4 / IT 32-34 / KR 44-55 / size – S <span>재고 :  {dress.size1}</span></li> 
                        <li>US 6-8 / IT 36-38 / KR 55-66 / size – M <span>재고 :  {dress.size2}</span></li>
                        <li>US 10 / IT 40 / KR 66-77 / size – L <span>재고 :  {dress.size3}</span></li>
                    </ul>
                    <div>
                        <select id='slt' onChange={()=>{
                            qttNum.value=0;
                        }}>
                            <option value="1" className='qtt'>S</option>
                            <option value="2" className='qtt'>M</option>
                            <option value="3" className='qtt'>L</option>
                        </select>
                        <input id='qttNum' type="number" min="0" max={dress.size1} />
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div id='desc'>
                <h3>DESCRIPTION</h3>
                <p>
                    {dress.desc}
                </p>
                <p>
                    {dress.desc2}
                </p>
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