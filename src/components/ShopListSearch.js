import React from 'react';
import { Link } from 'react-router-dom';

const ShopListSearch = ({dress}) => {
    return ( 
        <li className='listWrap'>
            <div className='shopImgWrap'>
                <div className='shopImg'>
                    <Link to={`/shop/${dress.id}`}>
                        <img src={dress.imgsrc} alt="" />
                    </Link>
                </div>
                <div className='shopImg'>
                    <Link to={`/shop/${dress.id}`}>
                        <img src={dress.imgsrc2} alt="" />
                    </Link>
                </div>
            </div>
            <div className='shopText'>
                <Link to={`/shop/${dress.id}`}>
                <p>{dress.name}</p>
                <span>{dress.price.toLocaleString('ko-KR')} won</span>
                </Link>
            </div>
            
        </li>
    );
};

export default ShopListSearch;