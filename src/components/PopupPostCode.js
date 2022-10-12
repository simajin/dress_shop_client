import React, { useEffect, useState } from 'react';
import DaumPostcode from "react-daum-postcode";
// npm install react-daum-postcode 설치하기!
import './PopupPostCode.css';

const PopupPostCode = (props) => {
  const [popup, setPopup] = useState("window");
  
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onAddData(data);  
    }

    

    useEffect(()=>{
      const handleResize = (e)=>{
        const {innerWidth} = e.target
        console.log(innerWidth)
        if(innerWidth <= 768){
          setPopup("mobile");
        }else {
          setPopup("window");
        }
      }
      console.log(window.innerWidth)
      window.addEventListener("resize",handleResize);
      
      return ()=>{
        window.removeEventListener("resize",handleResize);
      }
    },[])
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width: "600px",
        height: "600px",
        padding: "7px",
        border: "2px solid #666",
        zIndex: 20
      };
    const postCodeMobile = {
      display: "block",
      position: "absolute",
      top: '50%',
      left: '30%',
      transform:'translate(-50%,-50%)',
      width: "350px",
      height: "600px",
      padding: "7px",
      border: "2px solid #666",
      zIndex: 20
    }
 
    return(
        <div>
            <DaumPostcode style={window.innerWidth <= 768? postCodeMobile : postCodeStyle} onComplete={handlePostCode}/> 
            {/* <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />  */}
            <button type='button' onClick={() => {props.onClose()}} style={props.onPopup === true? {display:"block"} : {display:"none"}} className='postCode_btn'>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;