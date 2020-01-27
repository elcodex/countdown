import React from 'react';
import ReactDOM from 'react-dom';

import Countdown from './components/Countdown.js';

let renderCountdownComponent = (text, date, time, timeZone) => {
    const utcString = new Date(`${date} ${time}${timeZone}`).toUTCString();

    ReactDOM.render(
        <Countdown 
            text={text} 
            date={utcString}
        />, 
        document.getElementById('countdown-wrapper')
    );
}

document.getElementById('btn-close').addEventListener('click', function(e) {
    let userSettings = document.querySelector('.user-settings');
    userSettings.classList.remove('display-flex');
    userSettings.classList.add('display-none');

    let menuSettings = document.querySelector('.menu-settings');
    menuSettings.classList.remove('display-none');
    menuSettings.classList.add('display-block');
});

document.getElementById('btn-open').addEventListener('click', function(e) {
    let userSettings = document.querySelector('.user-settings');
    userSettings.classList.remove('display-none');
    userSettings.classList.add('display-flex');

    let menuSettings = document.querySelector('.menu-settings');
    menuSettings.classList.remove('display-block');
    menuSettings.classList.add('display-none');
});

document.getElementById('btn-update').addEventListener('click', function(e)  {
    const text = document.querySelector("#countdown-text").value;
    const date = document.querySelector("#countdown-date").value;
    const time = document.querySelector("#countdown-time").value;
    const timeZone = document.querySelector("#countdown-timezone").value;

    renderCountdownComponent(text, date, time, timeZone);
});

const initialValues = (text, date, time, timeZone) => {
    document.querySelector("#countdown-text").value = text;
    document.querySelector("#countdown-date").value = date;
    document.querySelector("#countdown-time").value = time;
    document.querySelector("#countdown-timezone").value = timeZone;

    renderCountdownComponent(text, date, time, timeZone);
}

initialValues('Countdown before spring', '2020-03-01', '00:00', '-05:00');