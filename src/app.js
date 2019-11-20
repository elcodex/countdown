
document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector("input[type='text']").value;
    const date = document.querySelector("input[type='date']").value;
    const time = document.querySelector("input[type='time']").value;
    const timeZone = document.querySelector("#countdown-timezone").value;

    const utcString = new Date(`${date} ${time}${timeZone}`).toUTCString();
    console.log(date, time, utcString);

    ReactDOM.render(
        <Countdown 
            text={text} 
            date={utcString}
        />, 
        document.getElementById('countdown-wrapper')
    );
});

const initialValues = (text, dateString, timeString, timeZoneString) => {
    document.querySelector("input[type='text']").value = text;
    document.querySelector("input[type='date']").value = dateString;
    document.querySelector("input[type='time']").value = timeString;
    document.querySelector("#countdown-timezone").value = timeZoneString;

    const utcString = new Date(`${dateString} ${timeString}${timeZoneString}`).toUTCString();
    ReactDOM.render(
        <Countdown 
            text={text}
            date={utcString}    
        />, 
        document.getElementById('countdown-wrapper')
    );
}

initialValues('Advent Of Code will start at', '2019-12-01', '00:00', '-05:00');
