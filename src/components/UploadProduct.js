import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const UploadProduct = () => {
    // const navigate = useNavigate();
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
    //onChange 이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    //폼 onSubmit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // 가격 숫자인지 체크
        if(isNaN(formData.c_price)){
            alert("가격은 숫자만 입력해주세요.");
            setFormData({
                ...formData,
                c_price:""
            })
        }
        if(formData.c_name !== "" && formData.c_price !== "" &&
        formData.c_size1 !== "" && formData.c_size2 !== "" && formData.c_size3 !== "" &&
        formData.c_type !== "" && 
        formData.c_desc1 !=="" && formData.c_desc2 !=="" &&
        formData.c_pic1 !=="" && formData.c_pic2 !=="" && formData.c_pic3 !==""){
            uploadDress();
        }
        //등록함수
        function uploadDress(){
            axios.post('http://localhost:8000/upload', formData)
            .then(res=>{
                console.log(res);
                // navigate('/shop');
            })
            .catch(e=>{
                console.log(e);
            })
        }
    }

    return (
    <div>
        <div id='uploadBox'>
            <h2>Upload_Product</h2>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <label htmlFor="name">상품명</label>
                        <input type="text" name='c_name' value={formData.c_name} onChange={onChange}/>
                    </li>
                    <li>
                        <label htmlFor="price">가격</label>
                        <input type="text" name='c_price' min={0} value={formData.c_price} onChange={onChange}/>
                    </li>
                    <li>
                        <label htmlFor="size1">사이즈S</label>
                        <input type="number" name='c_size1' min={0} value={formData.c_size1} onChange={onChange}/>
                    </li>
                    <li>
                        <label htmlFor="size2">사이즈M</label>
                        <input type="number" name='c_size2' min={0} value={formData.c_size2} onChange={onChange} />
                    </li>
                    <li>
                        <label htmlFor="size3">사이즈L</label>
                        <input type="number" name='c_size3' min={0} value={formData.c_size3} onChange={onChange} />
                    </li>
                    <li>
                        <label htmlFor="name">type</label>
                        <select name='name'>
                            <option name="c_type" value="Belline" onChange={onChange}>Bell_Line</option>
                            <option name="c_type" value="Mermaid" onChange={onChange}>Mermaid</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="desc1">상품정보</label>
                        <textarea cols={50} rows={10} name="c_desc1" value={formData.c_desc1} onChange={onChange}></textarea>
                    </li>
                    <li>
                        <label htmlFor="desc2">상품정보(영어)</label>
                        <textarea cols={50} rows={10} name="c_desc2" value={formData.c_desc2} onChange={onChange}></textarea>
                    </li>
                    <li>
                        <label htmlFor="pic1">사진1</label>
                        <input type="file" name="c_pic1" value={formData.c_pic1} onChange={onChange} />
                    </li>
                    <li>
                        <label htmlFor="pic2">사진2</label>
                        <input type="file" name="c_pic2" value={formData.c_pic2} onChange={onChange} />
                    </li>
                    <li>
                        <label htmlFor="pic3">사진3</label>
                        <input type="file" name="c_pic3" value={formData.c_pic3} onChange={onChange} />
                    </li>
                    <li id='uploadBtn'>
                        <button type='submit'>등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default UploadProduct