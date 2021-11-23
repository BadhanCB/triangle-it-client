import React from 'react';
import './TopScrollButton.css';

const TopScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <div>
            <button id="topScrollButton" onClick={scrollToTop} >^</button>
        </div>
    );
};

export default TopScrollButton;