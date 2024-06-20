import React from 'react';
import './Left.css';
import LatestNews from './LatestNews';
import UpcomingEvents from './UpcomingEvents';

const Left = () => {
    return (
        <div className="Left">
            <LatestNews />
            <UpcomingEvents />
        </div>
    );
};

export default Left;