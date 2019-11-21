import React from 'react';

import Text from './Text.js';
import CountdownPart from './CountdownPart.js';
import Splitter from './Splitter.js';

export default function Countdown(props) {
    const getLeftHours = leftMilliseconds =>
        Math.floor(leftMilliseconds / 60 / 60 / 1000);
    const getLeftMinutes = leftMilliseconds =>
        Math.floor(leftMilliseconds / 60 / 1000) % 60;
    const getLeftSeconds = leftMilliseconds =>
        Math.floor(leftMilliseconds / 1000) % 60;

    let utcDate = Date.parse(props.date);
    let leftHours = 0;
    let leftMinutes = 0;
    let leftSeconds = 0;

    const leftMilliseconds = utcDate - Date.now();
    if (!isNaN(leftMilliseconds) && leftMilliseconds > 0) {
        leftHours = getLeftHours(leftMilliseconds);
        leftMinutes = getLeftMinutes(leftMilliseconds);
        leftSeconds = getLeftSeconds(leftMilliseconds);
    }
    
    let [hours, setHours] = React.useState(leftHours);
    let [minutes, setMinutes] = React.useState(leftMinutes);
    let [seconds, setSeconds] = React.useState(leftSeconds);   

    let intervalId = null;
    React.useEffect(() => {
        if (intervalId) return;
        
        intervalId = setInterval(() => {
            const leftMilliseconds = utcDate - Date.now();
            if (isNaN(leftMilliseconds) || leftMilliseconds <= 0) {
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                clearInterval(intervalId);
                return;
            }
            setHours(getLeftHours(leftMilliseconds));
            setMinutes(getLeftMinutes(leftMilliseconds));
            setSeconds(getLeftSeconds(leftMilliseconds));
        }, 1000);

        return () => clearInterval(intervalId);
    });

    return (
        <div className="countdown">
            <Text text={props.text} textClassName="countdown__text"/>
            <div className="countdown__parts">
                <CountdownPart value={hours} valueText="hours" partClassName="countdown__part"/>
                <Splitter />
                <CountdownPart value={minutes} valueText="minutes" partClassName="countdown__part"/>
                <Splitter />
                <CountdownPart value={seconds} valueText="seconds" partClassName="countdown__part"/>
            </div>
        </div>
    );
}
