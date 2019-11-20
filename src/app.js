import React from 'react';
import ReactDOM from 'react-dom';

import Countdown from './components/Countdown.js';

let renderCountdownComponent = (text, date, time, timeZone) => {
    const utcString = new Date(`${date} ${time}${timeZone}`).toUTCString();
    //console.log(date, time, utcString);

    ReactDOM.render(
        <Countdown 
            text={text} 
            date={utcString}
        />, 
        document.getElementById('countdown-wrapper')
    );
}

document.querySelector('button').addEventListener('click', () => {
    const text = document.getElementById("countdown-text").value;
    const date = document.getElementById("countdown-date").value;
    const time = document.getElementById("countdown-time").value;
    const timeZone = document.getElementById("countdown-timezone").value;

    renderCountdownComponent(text, date, time, timeZone);
});

const initialValues = (text, date, time, timeZone) => {
    document.getElementById("countdown-text").value = text;
    document.getElementById("countdown-date").value = date;
    document.getElementById("countdown-time").value = time;
    document.getElementById("countdown-timezone").value = timeZone;

    renderCountdownComponent(text, date, time, timeZone);
}

initialValues('Advent Of Code will start in', '2019-12-01', '00:00', '-05:00');
