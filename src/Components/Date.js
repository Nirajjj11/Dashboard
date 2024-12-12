import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(date);
    };

    return (
        <div className='FullCount'>
            <h2>{formatDate(currentDateTime)}</h2> 
            <h2> {currentDateTime.toLocaleTimeString()}</h2>
        </div>
    );
};

export default DateTimeDisplay;
