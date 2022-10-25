import React, { useState } from 'react'
import './Info.css'

const Info = () => {
    const [infoType, setInfoType] = useState("자주 묻는 질문");
    const [bodyOn, setBodyOn] = useState();

    const TypeChangeEvent = (e)=>{
        const type = e.target.innerText;
        if(type === "FAQ"){
            setInfoType("자주 묻는 질문");
        }else if(type === "입고정보"){
            setInfoType("입고정보");
        }
    };
    
    const listSelectEvent = (e)=>{
        const listId = e.target.parentNode.parentNode.id
        if(listId !== bodyOn){
            setBodyOn(listId)
        }else{
            setBodyOn();
        }
    }
    

  return (
    <div id='info'>
        <h2>{infoType}</h2>
        <p>제목을 클릭해주세요</p>
        <ul id='infoList'>
            <li onClick={TypeChangeEvent}>
                <h3>FAQ</h3>
            </li>
            <li onClick={TypeChangeEvent}>
                <h3>입고정보</h3>
            </li>
        </ul>
        <div className='board faq' style={{display:infoType === "자주 묻는 질문"? "block":"none"}}>
            <ul>
                <li className='boardHeader'>
                    <ul>
                        <li>번호</li>
                        <li>카테고리</li>
                        <li>제목</li>
                        <li>작성자</li>
                    </ul>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="6">
                    <ul>
                        <li>6</li>
                        <li>계정문의</li>
                        <li>비밀번호가 생각나지 않아요.</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "6"? "block":"none"}}>
                        <h4>비밀번호가 생각나지 않아요.</h4>
                        저희 W웨딩은 스페셜 고객들의 개인정보를 보호하기 위해<br/>
                        홈페이지에서 비밀번호 찾기 기능을 구현하고 있지않습니다.<br/>
                        비밀번호 찾기를 원하실 경우 저희 매장에 전화문의 주시기 바랍니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="5">
                    <ul>
                        <li>5</li>
                        <li>배송문의</li>
                        <li>옷은 어떻게 받아보나요?</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "5"? "block":"none"}}>
                        <h4>옷은 어떻게 받아보나요?</h4>
                        저희 제품은 고가의 제품이므로 일반 택배를 이용하지 않고<br/>
                        저희 직원들이 직접 고객님께 배송해드리고 있사오니<br/>
                        배송 시 보다 안전하게 제품을 고객님께 전달해드립니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="4">
                    <ul>
                        <li>4</li>
                        <li>교환반품</li>
                        <li>제품이 마음에 들지않습니다. 반품하고 싶어요.</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "4"? "block":"none"}}>
                        <h4>제품이 마음에 들지않습니다. 반품하고 싶어요.</h4>
                        구매하신 제품은 고객님의 신체 사이즈에 맞춘 제품이기 때문에<br/>
                        구매 후 반품은 불가능합니다.<br/>
                        W웨딩에서는 제품을 구매 후 6개월간 무상 AS를 진행하고 있으니<br/>
                        기타 제품의 이상이 생길 경우 문의 주시기바랍니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="3">
                    <ul>
                        <li>3</li>
                        <li>교환반품</li>
                        <li>사이즈가 맞지 않습니다.</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "3"? "block":"none"}}>
                        <h4>사이즈가 맞지 않습니다.</h4>
                        저희 매장에서 정확하게 신체사이즈를 측정 후 맞게 수선을 하더라도<br/>
                        여러 사정들에 의해 사이즈가 맞지않는 경우가 발생할 수 있습니다.<br/>
                        저희 W웨딩에서는 고객님께서 제품을 구매 후 6개월간의 무상으로 <br/>
                        AS를 진행하고 있으니 기타 제품의 이상이 생길 경우 문의 주시기바랍니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="2">
                    <ul>
                        <li>2</li>
                        <li>이용방법</li>
                        <li>가격이 왜 이렇게 비싼가요??</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "2"? "block":"none"}}>
                        <h4>가격이 왜 이렇게 비싼가요??</h4>
                        저희 w웨딩은 타 업체들과 다르게 드레스의 대여가 아닌<br/>
                        고객님의 특별한 날에 고객님께 딱 맞는 단 하나의 드레스를<br/>
                        고객님께 판매하고 있습니다. 
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="1">
                    <ul>
                        <li>1</li>
                        <li>이용방법</li>
                        <li>주문은 어떻게 하나요?</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "1"? "block":"none"}}>
                        <h4>주문은 어떻게 하나요?</h4>
                        저희 w웨딩은 고객님의 정확한 신체사이즈를 확인 후 <br/>
                        고객님의 몸에 꼭 맞는 드레스를 드릴 수 있도록 <br/>
                        매장을 방문해주셔야 주문이 가능합니다.
                    </p>
                </li>
            </ul>
        </div>
        <div className='board stock'  style={{display:infoType === "입고정보"? "block":"none"}}>
            <ul>
                <li className='boardHeader'>
                    <ul>
                        <li>번호</li>
                        <li>작성일</li>
                        <li>제목</li>
                        <li>작성자</li>
                    </ul>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="7">
                    <ul>
                        <li>7</li>
                        <li>2022-09-30</li>
                        <li>Belline의 ADELINE 사이즈 S & M | 입고 완료</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "7"? "block":"none"}}>
                        <h4>Belline의 ADELINE 사이즈 S & M 입고 완료</h4>
                        인기제품 Belline의 ADELINE의 사이즈 S 및 M의 입고가 완료되었습니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="6">
                    <ul>
                        <li>6</li>
                        <li>2022-06-22</li>
                        <li>Belline의 ADELINE 사이즈 S & M | 9월 중 입고 예정</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "6"? "block":"none"}}>
                        <h4>Belline의 ADELINE 입고 예정</h4>
                        인기제품 Belline의 ADELINE의 사이즈 S 및 M의 입고가 9월 예정입니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="5">
                    <ul>
                        <li>5</li>
                        <li>2022-04-29</li>
                        <li>Belline의 CRYSTAL2 및 TROPICANA의 모든 사이즈 | 입고 완료</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "5"? "block":"none"}}>
                        <h4>Belline의 CRYSTAL2 및 TROPICANA의 모든 사이즈 입고 완료</h4>
                        인기제품 Belline의 CRYSTAL2 및 TROPICANA의 모든 사이즈가 입고 완료되었습니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="4">
                    <ul>
                        <li>4</li>
                        <li>2022-02-09</li>
                        <li>Belline의 CRYSTAL2 및 TROPICANA의 모든 사이즈 | 4월 중 입고 예정</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "4"? "block":"none"}}>
                        <h4>Belline의 CRYSTAL2 및 TROPICANA 입고 예정</h4>
                        인기제품 SIER 및 AMEL의 모든 사이즈가 4월 중에 입고 예정입니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="3">
                    <ul>
                        <li>3</li>
                        <li>2022-02-03</li>
                        <li>Mermaid의 SIER 및 AMEL의 모든 사이즈 | 입고 완료</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "3"? "block":"none"}}>
                        <h4>Mermaid의 SIER 및 AMEL의 모든 사이즈 입고완료</h4>
                        인기제품 SIER 및 AMEL의 모든 사이즈가 입고 완료되었습니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="2">
                    <ul>
                        <li>2</li>
                        <li>2022-01-13</li>
                        <li>Mermaid의 SIER 및 AMEL의 모든 사이즈가 | 2월 중 입고 예정</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "2"? "block":"none"}}>
                        <h4>Mermaid의 SIER 및 AMEL 입고예정</h4>
                        인기제품 SIER 및 AMEL의 모든 사이즈가 2월 중으로 입고될 예정입니다.
                    </p>
                </li>
                <li className='boardList' onClick={listSelectEvent} id="1">
                    <ul>
                        <li>1</li>
                        <li>2021-12-08</li>
                        <li>시그니처 전 제품 입고 완료.</li>
                        <li>대표 관리자 👸🏻</li>
                    </ul>
                    <p className='boardBody' style={{display:bodyOn === "1"? "block":"none"}}>
                        <h4>시그니처 전 제품 입고 완료.</h4>
                        프리미엄 드레스 W웨딩만의 시그니처 드레스들이 입고되었습니다.
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Info