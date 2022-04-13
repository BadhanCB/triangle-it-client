import React from 'react';
import './TopScrollButton.css';
import {ChevronDoubleUpIcon} from "@heroicons/react/outline";

const TopScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <div>
            <button id="topScrollButton" onClick={scrollToTop} className="p-2">
            <ChevronDoubleUpIcon className="icon text-blue-500" />
            Back To Top
            </button>
        </div>
    );
};

export default TopScrollButton;