import React, { useEffect, useState } from 'react';
import './Notice.css';

const Notice = () => {
    // const hiddenContent = document.querySelectorAll('.hidden');
    // const noticeNo = document.querySelectorAll('.noticeNo');

    //공지사항의 각 항목별 제목 클릭시, 상세보기가 나타나도록!
    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (e)=>{
        console.log(e.target.className);
        if(open===Number(e.target.className)){
            console.log('이미 같은 번호가 선택됨. 닫기~!');
            setOpen(null);
            console.log(open);
        }else{
            setOpen(Number(e.target.className));
        }
    }

    useEffect(()=>{
        setIsOpen(open);
    },[open])

    return (
        <div id="notice">
            <h2>NOTICE</h2>
            <table>
                <tbody>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className='7' onClick={onClick}>원단가격 인상에 따른 드레스 단가인상 안내드립니다.</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-10-24</td>
                    </tr>
                    {7 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>    
                                <div>
                                    <span className='noticeTitle'>■ 원부자재 가격 및 인건비의 상승으로 인한 단가인상 안내</span><br/><br/>
                                    장기화된 코로나 팬데믹으로 인한 해외 원자재 가격 상승, 운송비 폭등으로 인해<br/>

                                    공급단가가 많이 인상됨에 따라 부득이 현재 판매되고 있는 대부분의 제품에 가격변동이 있을 예정입니다.<br/><br/><br/>

                                    큰 폭의 인상이 아닌것은 기존 가격대로 진행할 예정이나<br/>

                                    10% 이상 인상폭이 있는 것은 주문이 들어 온 이후에라도 고객님께 인상된 가격으로 <br/>

                                    다시 고지해 드릴수 있는 점 널리 이해해 주시고 양지해 주시면 감사하겠습니다.<br/><br/><br/>


                                    보다 나은 제품과 서비스로 노력하는 W Wedding이 되겠습니다.💍<br/><br/>

                                    감사합니다.🙇🏻‍♀️                             
                                </div>
                            </td>
                        </tr>
                    }   
                    <tr>
                        <td>6</td>
                        <td className='6' onClick={onClick} style={{fontFamily: "Playfair Display"}}>CUSTOM-MADE</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-09-07</td>
                    </tr>
                    {6 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>    
                                <div>
                                    <span className='noticeTitle'>■ 커스텀 드레스 구매 안내</span><br/><br/>
                                    W Wedding은 신부님들의 니즈와 체형을 고려한 커스텀 드레스 구매 서비스를 진행하고 있습니다.<br/><br/>

                                    주문 즉시 HAUTE COUTURE 제작 방식으로 까다로운 공정 과정을 거쳐, <br/>
                                    <span className='noticeSpan'>30년 경력의 DRESS MAKER</span> 장인분들이 드레스 제작에 들어갑니다.<br/><br/>
                                    해외 배송도 가능하며 <span className='noticeSpan'>제작 기간은 평균 3달 정도</span> 소요됩니다.<br/><br/>
                                    💎RANGE $6,000-15,000💎
                                </div>
                            </td>
                        </tr>
                    }  
                    <tr>
                        <td>5</td>
                        <td className='5' onClick={onClick} style={{fontFamily: "Playfair Display"}}>RENTAL SERVICE</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-09-07</td>
                    </tr>
                    {5 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>    
                                <div>
                                    <span className='noticeTitle'>■ 렌탈 서비스 안내</span><br/><br/>
                                    W Wedding은 신부님들의 가장 빛나는 순간을 위해, 특별하고 고귀한 드레스한 컬렉션을 창조합니다.<br/><br/>
                                                            
                                    신부님 개개인의 몸에 딱 맞게 착용 하실 수 있도록 <span className='noticeSpan'>맞춤 수선 서비스를 포함한 렌탈 서비스</span>를 운영 중입니다.<br/><br/>

                                    W Wedding은 청담본점에서는 상담 전 드레스 선호도 설문지를 작성하여, <br/>
                                    보다 전문적인 1:1 드레스 매칭률을 자랑하며 풀 악세서리 스타일링 서비스가 더해져 아름다운 웨딩을 함께 준비해 드립니다.
                                </div>
                            </td>
                        </tr>
                    }  
                    <tr>
                        <td>4</td>
                        <td className='4' onClick={onClick} style={{fontFamily: "Playfair Display"}}>SNAP IN SHOP</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-09-02</td>
                    </tr>
                    {4 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>    
                                <div>
                                    <span className='noticeTitle'>■ 가봉 스냅 서비스 안내</span><br/><br/>
                                    감각적인 인테리어의 200평대 W Wedding의 청담쇼룸에서 <span className='noticeSpan'>2시간 동안 프라이빗하게</span> 진행되는 <br/>가봉 스냅 서비스를 만나보세요.💍<br/><br/>

                                    전문가가 추천해 드리는 드레스를 라벨 상관없이 착용하시고 드레스와 어울리는 악세사리, 슈즈, 부케 스타일링까지 제안해 드립니다.
                                </div>
                            </td>
                        </tr>
                    }  
                    <tr>
                        <td>3</td>
                        <td className='3' onClick={onClick}>고객센터 상담시간</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-08-01</td>
                    </tr>
                    {3 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>    
                                <div>
                                    <span className='noticeTitle'>Q. 고객센터의 상담 시간을 알고 싶어요.</span><br/><br/>

                                    - 고객센터 전화번호 : 1544-0000<br/><br/>

                                    - 상담 시간 : 평일 오전 10시 ~ 오후 5시 (점심시간 : 오전 11시 30분 ~ 오후 1시 30분 / 월, 주말, 공휴일 휴무)<br/><br/>

                                    - 전화 연결이 어려운 경우 카카오 상담톡이나 인스타로 문의를 남겨주시면 확인 후 정성껏 답변드리겠습니다.<br/><br/>

                                    ※ 문의량이 많을 경우 상담 연결 및 답변이 지연될 수 있습니다.
                                </div>
                            </td>
                        </tr>
                    }   
                    <tr>
                        <td>2</td>
                        <td className='2' onClick={onClick}>교환 및 반품안내</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-08-01</td>
                    </tr>
                    {2 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>
                                <div>
                                    <span className='noticeTitle'>■ 교환 및 반품 안내</span><br/><br/>

                                    <span className='noticeTitle2'>교환 및 반품이 가능한 경우</span><br/><br/>


                                    - 저희 W Wedding은 <span className='noticeSpan'>드레스 한 벌을 위해 500시간이 넘는 시간</span>을 과감하게 투자합니다.<br/>

                                    그렇기 때문에 제작 특성상 상품의 하자가 있는 경우를 제외하고는 교환/반품이 불가능합니다.<br/><br/>


                                    - 하지만 공급받으신 상품 및 용역의 내용이 표시, 광고 내용과 다르거나 다르게 이행된 경우에는<br/>

                                    공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내 교환/반품이 가능합니다.<br/><br/><br/>



                                    <span className='noticeTitle2'>교환 및 반품이 불가능한 경우</span><br/><br/>


                                    - 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우.<br/>

                                    단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외<br/><br/>


                                    - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우<br/><br/>


                                    - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우<br/><br/>


                                    - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우<br/><br/>


                                    - 복제가 가능한 상품 등의 포장을 훼손한 경우<br/>
                                    (자세한 내용은 고객센터 상담을 이용해 주시기 바랍니다.)<br/><br/>


                                    ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품 반송 비용은 고객님께서 부담하셔야 합니다.<br/>
                                    (색상 교환, 사이즈 교환 등 포함)<br/><br/><br/>



                                    <span className='noticeTitle2'>교환/반품 절차</span><br/><br/>


                                    - 마이페이지 → 주문내역 → 교환/반품 신청 → 수거 기사님 방문 예정<br/><br/>


                                    - 구매하신 쇼핑몰에서 신청해주시거나, 고객센터(1544-0000)로 신청 부탁드립니다.<br/><br/>


                                    - 구매하신 제품의 AS를 원하는 경우에도 고객센터(1544-0000)로 연락 부탁드립니다.

                                </div>
                            </td>
                        </tr>
                    }
                    <tr>
                        <td>1</td>
                        <td className='1' onClick={onClick}>배송안내</td>
                        <td>대표 관리자 👸🏻</td>
                        <td>2022-08-01</td>
                    </tr>
                    {1 === isOpen && 
                        <tr className='hidden'>
                            <td colSpan={4}>
                                <div>
                                    <span className='noticeTitle'>■ 배송 가능 시간 안내</span><br/><br/>

                                    - 영업일 기준 오후 1시 이전 결제 완료 주문건 :  당일 출고됩니다. (일부 상품 제외)<br/><br/>

                                    - 재고가 없을시, <span className='noticeSpan'>최소 3개월</span>의 시간이 소요되며 이를 고려하여 주문을 해주시길 바랍니다.<br/><br/>

                                    - 공휴일의 경우 다음 영업일에 출고됩니다.<br/><br/>

                                    (출고된 경우 서울/수도권 지역은 대부분 다음날 수령, 지방은 1~3일 이내에 배송됩니다.<br/>
                                    따라서 전체 배송 기간은 (업무일 기준) 3일~7일 정도 소요되며, 일부 택배사 사정에 따라 변동될 수 있습니다.)<br/><br/>

                                    ※ 주문 상품이 재고 부족일 경우 부득이하게 배송 시간은 달라질 수 있는 점 양해 부탁드립니다.
                                </div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Notice;