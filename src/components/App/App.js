import FormattedTime from '../FormattedTime/FormattedTime';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    const startTimer = () => {
        if (!intervalId) {
            const newIntervalId = setInterval(() => {
                setTime(prevValue => prevValue + 1);
            }, 1);
            setIntervalId(newIntervalId);
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    return (
        <div className="stopwatch-container">
            <FormattedTime time={time} />
            <div className="buttons-container">
                <button onClick={startTimer}>START</button>
                <button onClick={stopTimer}>STOP</button>
                <button onClick={resetTimer}>RESET</button>
            </div>
        </div>
    );
};

export default App;