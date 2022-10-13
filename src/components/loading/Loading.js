import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loadingBar'>
            <div className="count_motion on"></div>
            <div className="count_txt">W Wedding</div>
        </div>
    );
};

export default Loading;