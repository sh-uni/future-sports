import React from 'react';
import './MainText.css';

const MainText = () => {
    return (
        <div className="MainText">
            <p id="main-text-p" style={{width:"74%", textAlign:"center", fontSize:"24px", marginBottom:"15px"}}>
                If you&apos;re looking for a new and exciting sport to get involved in, look no further than Quadball, 
                inspired by the fictional sport of Quidditch. This fast and exciting game is played across Australia 
                with local, state and national leagues. We even have a national team, the Australian Dropbears, who 
                took home the World Cup back in 2016.</p>  
            <button>Rules</button>
        </div>
    );
};

export default MainText;