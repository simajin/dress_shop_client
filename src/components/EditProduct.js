import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ShopCss.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './config/contansts';

const EditProduct = () => {
    const navigate = useNavigate();
    // const typeOpt = document.querySelector('#typeOpt');
    const { id } = useParams();
    const [ formData, setFormData ] = useState({
        c_name: "",
        c_price: "",
        c_size1: "",
        c_size2: "",
        c_size3: "",
        c_type: "",
        c_desc1: "",
        c_desc2: "",
        c_pic1: "",
        c_pic2: "",
        c_pic3: ""
    })

    const [ dress, setDress ] = useState(null);
    useEffect(()=>{
        // axios.get(`http://localhost:8000/dress/${id}`)
        axios.get(`${API_URL}/dress/${id}`)
        .then(result=>{
            console.log(result);
            const data = result.data;
            setDress(data[0]); 
        })
        .catch(e=>{
            console.log(e);
        })
    // eslint-disable-next-line
    },[])

    // 값 변경시
    useEffect(()=>{
        setFormData({
            c_name: dress? dress.name : "",
            c_price: dress? dress.price : "",
            c_size1: dress? dress.size1 : "",
            c_size2: dress? dress.size2 : "",
            c_size3: dress? dress.size3 : "",
            c_type: dress? dress.type : "",
            c_desc1: dress? dress.desc1 : "",
            c_desc2: dress? dress.desc2 : "",
            c_pic1: dress? dress.imgsrc : "",
            c_pic2: dress? dress.imgsrc2 : "",
            c_pic3: dress? dress.imgsrc3 : ""
        })
    },[dress])

    //onChange 이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    //이미지 onChange 이벤트
    const onChangeImg = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] :value.replace("C:\\fakepath\\","images/")
        })
    }

    //폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("상품등록");
        console.log(formData);

        // 가격 숫자인지 체크
        if(isNaN(+formData.c_price)){
            alert("가격은 숫자만 입력해주세요.");
            setFormData({
                ...formData,
                c_price:+''
            })
        }
        if(formData.c_name !== "" && formData.c_price !== "" &&
        formData.c_size1 !== "" && formData.c_size2 !== "" && formData.c_size3 !== "" &&
        formData.c_type !== "" && 
        formData.c_desc1 !=="" && formData.c_desc2 !=="" &&
        formData.c_pic1 !=="" && formData.c_pic2 !=="" && formData.c_pic3 !==""){
            updateDress();
        }
        //수정함수
        //axios put 전송
        function updateDress(){
            // axios.put(`http://localhost:8000/editDress/${id}`,formData)
            axios.put(`${API_URL}/editDress/${id}`,formData)
            .then(res=>{
                console.log(res);
                navigate('/shop');
            })
            .catch(e=>{
                console.log(e);
            })
        }
    }
    const check = ()=>{
        console.log(formData);
    }
    // get전송으로 받은거
    if(!dress) return <div>로딩중...</div>
    return (
        <div>
            <div id='uploadBox'>
            <h2>Upload_Product</h2>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <label htmlFor="name">상품명</label>
                        <input type="text" name='c_name' defaultValue={formData.c_name} onChange={onChange} value={formData.c_name}/>
                    </li>
                    <li>
                        <label htmlFor="price">가격</label>
                        <input type="number" name='c_price' min={0} defaultValue={formData.c_price} onChange={onChange} value={formData.c_price}/>
                    </li>
                    <li>
                        <label htmlFor="size1">사이즈S</label>
                        <input type="number" name='c_size1' min={0} defaultValue={formData.c_size1} onChange={onChange} value={formData.c_size1} />
                    </li>
                    <li>
                        <label htmlFor="size2">사이즈M</label>
                        <input type="number" name='c_size2' min={0} defaultValue={formData.c_size2} onChange={onChange} value={formData.c_size2} />
                    </li>
                    <li>
                        <label htmlFor="size3">사이즈L</label>
                        <input type="number" name='c_size3' min={0} defaultValue={formData.c_size3} onChange={onChange} value={formData.c_size3} />
                    </li>
                    <li>
                        <label htmlFor="name">type</label>
                        <select name='c_type' onChange={onChange} defaultValue={formData.c_type} value={formData.c_type}>
                            <option name="c_type" value="belline" >bellline</option>
                            <option name="c_type" value="mermaid" >mermaid</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="desc1">상품정보</label>
                        <textarea cols={50} rows={10} name="c_desc1" defaultValue={formData.c_desc1} value={formData.c_desc1} onChange={onChange}></textarea>
                    </li>
                    <li>
                        <label htmlFor="desc2">상품정보(영어)</label>
                        <textarea cols={50} rows={10} name="c_desc2" defaultValue={formData.c_desc2} value={formData.c_desc2} onChange={onChange}></textarea>
                    </li>
                    <li>
                        <label htmlFor="pic1">사진1</label>
                        <input type="file" name="c_pic1" onChange={onChangeImg} />
                        {/* <input type="file" name="c_pic1" defaultValue={formData.c_pic1} onChange={onChangeImg} id='imgInput' />
                        <input type="hidden" name="real_path" defaultValue={formData.c_pic1} id='real_path' /> */}
                    </li>
                    <li>
                        <label htmlFor="pic2">사진2</label>
                        <input type="file" name="c_pic2" onChange={onChangeImg} />
                    </li>
                    <li>
                        <label htmlFor="pic3">사진3</label>
                        <input type="file" name="c_pic3" onChange={onChangeImg} />
                    </li>
                    <li id='uploadBtn'>
                        <button type='submit' onClick={check}>수정</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
            </div>
        </div>
    );
};

export default EditProduct;