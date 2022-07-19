import React from 'react';
import DaumPostcode from "react-daum-postcode";
// npm install react-daum-postcode 설치하기!
import './PopupPostCode.css';

const PopupPostCode = (props) => {
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
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} /> 
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>입력</button>
        </div>
    )
}
 
export default PopupPostCode;