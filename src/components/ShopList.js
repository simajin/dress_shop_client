import React from 'react';
import { Link } from 'react-router-dom';

const ShopList = ({dress}) => {
    return ( 
        <li>
            <div className='shopImg'>
                <Link to={`/shop/${dress.id}`}>
                    <img src={dress.imgsrc} alt="" />
                </Link>
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

export default ShopList;