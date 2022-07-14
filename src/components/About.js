import React,{ useEffect } from 'react';
import './AboutCss.css';

const About = () => {
    useEffect(()=>{
        const aboutImg = document.querySelectorAll(".aboutImg");
        const aboutText = document.querySelectorAll(".aboutText");
        window.addEventListener('scroll',()=>{
            for(let i=0; i<aboutImg.length; i++){
                if(aboutImg[i].getBoundingClientRect().y < 0){
                    aboutImg[i].style.transform = 'scale(0.9, 1.1)'
                }else{
                    aboutImg[i].style.transform = '';
                }
                if(aboutText[i].getBoundingClientRect().y < 200){
                    aboutText[i].style.opacity = '0';
                }else{
                    aboutText[i].style.opacity = '1';
                }
            }

        })

    },[])
    return (
        <div id='about'>
            <div id="aboutCEO">
                <img src='images/CEO.png' alt='' className='aboutImg'/>
                <div className='aboutText'>
                    <h2>CEO Message</h2>
                    <p>
                        가장 중요한 그 날,<br/>
                        일생에서 가장 아름다운 의복을 착용해보세요<br/>
                        W wedding이 범접할 수 없는 아우라를 만들어 드립니다<br/>
                        최상의 품질과 서비스로 보답하겠습니다, 감사합니다
                    </p>
                </div>
            </div>
            <div id="aboutContent1">
                <div className='aboutText'>
                    <h2>Dramatic Illustion</h2>
                    <p>
                    W wedding은 한국에서 20년의 세월을 웨딩과 함께 해 온
                    김예진대표와<br/> W wedding이 함께 만든 브랜드입니다.<br/>
                    세계 각국에서 수입한 원단과 오리지널 보석만을 사용해 만든<br/>
                    단 한 벌뿐인 드레스로, 국내 최상급 드레스들을 만나보실 수 있습니다.<br/>

                    신부님들의 가장 빛나는 순간을 위해, 모든 드레스를 직접 디자인하여<br/>
                    제작해 신부님의 Dramatic Illusion을 완성시켜드립니다.
                    </p>
                </div>
                <img src='images/about_content1.png' alt='' className='aboutImg'/>
            </div>
            <div id="aboutContent2">
                <img src='images/about_content2.png' alt='' className='aboutImg'/>
                <div className='aboutText'>
                    <h2>W wedding Customerize</h2>
                    <p>
                    남들과 다른 웨딩을 꿈꾸는 당신을 위해,<br/>
                    국내 최고 웨딩 컨설턴트분들이 모여<br/>
                    신부님의 분위기, 체형, 그리고 예식 장소 및 계절 등<br/>
                    모든 부분을 고려하여 최적의 웨딩드레스를 매칭해드립니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;