import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './config/contansts';

const UploadProduct = () => {
    const navigate = useNavigate();
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
    // function extractFilename(path) {
    //     if (path.substr(0, 12) === "C:\\fakepath\\")
    //       return path.substr(12); // modern browser
    //     var x;
    //     x = path.lastIndexOf('/');
    //     if (x >= 0)         // Unix-based path
    //       return path.substr(x+1);
    //     x = path.lastIndexOf('\\');
    //     if (x >= 0)         // Windows-based path
    //       return path.substr(x+1);
    //     return path;        // just the filename
    // }
    // function updateFilename(path) {
    //     var name = extractFilename(path);
    //     document.getElementById('filename').textContent = name;
    // }
    const onChange = (e) => {
        // const input = document.querySelector("input[type=file]");
        const { name, value } = e.target;
        // extractFilename();
        // updateFilename();
        setFormData({
            ...formData,
            [name] : value
            // [name[0].value] : value.replace("C:\\fakepath\\","images/"),
            // [formData.c_pic1]: value.replace("C:\\fakepath\\","images/"),
        })
    }
    const onChangeImg = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] :value.replace("C:\\fakepath\\","images/")
        })
    }
    //이미지 onChange 이벤트
    // const onChangeImg = (e) => {
    //     // const  file = e.target.files[0];
    //     // const reader = new FileReader();
    //     // reader.onload = (e) => {
    //     //     const fileData = e.target.result;
    
    //     //     const somePath = 'images/';
    
    //     //     file.writeFile(somePath, fileData);
    //     //     file.OpenFile(somePath)
    //     // }
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })
    //     // const file = e.target.files[0];
    //     // input.value = file.value.replace("C:\\fakepath\\", "/images/");
    // }
    //폼 onSubmit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("상품등록")
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
            uploadDress();
        }
        //등록함수
        function uploadDress(){
            // axios.post('http://localhost:8000/uploadDress', (formData))
            axios.post(`${API_URL}/uploadDress`, (formData))
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
                        <input type="number" name='c_price' min={0} value={formData.c_price} onChange={onChange}/>
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
                        <select name='c_type' onChange={onChange}>
                            <option name="c_type" value="belline">bellline</option>
                            <option name="c_type" value="mermaid">mermaid</option>
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
                        <input type="file" name="c_pic1" onChange={onChangeImg} />
                        {/* <input type="file" name="c_pic1" value={formData.c_pic1} onChange={onChangeImg} id='imgInput' />
                        <input type="hidden" name="real_path" value={formData.c_pic1} id='real_path' /> */}
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
                        <button type='submit' onClick={check}>등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default UploadProduct