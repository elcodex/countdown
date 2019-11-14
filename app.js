
let App = props => 
    <Countdown
      date={props.date}
      text={props.text}
    />


document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector("input[type='text']").value;
    const date = document.querySelector("input[type='date']").value;
    const time = document.querySelector("input[type='time']").value;
    /*
    const timezone = (new Date().getTimezoneOffset()) / 60;
    let timezoneString = '+00'; 
    `${date}T${time}.` // YYYY-MM-DDTHH:MM[:SS].000[+|-]ZZ:00
*/
    const utcString = new Date(`${date} ${time}`).toUTCString();
    console.log(utcString);

    ReactDOM.render(
        <App text={text} date={utcString}/>, 
        document.getElementById('countdown-wrapper')
    );
});

ReactDOM.render(
    <App 
        text={"Time left"}
        date={new Date().toUTCString()}    
    />, 
    document.getElementById('countdown-wrapper')
);
