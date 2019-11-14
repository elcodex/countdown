function Countdown(props) {
    let utcDate = Date.parse(props.date);
    const leftMilliseconds = utcDate - Date.now();
 
    let [hours, setHours] = React.useState(0);
    let [minutes, setMinutes] = React.useState(0);
    let [seconds, setSeconds] = React.useState(0);
    

    let intervalId = null;
    React.useEffect(() => {
        if (intervalId) return;
        
        intervalId = setInterval(() => {
            const leftMilliseconds = utcDate - Date.now();
            if (leftMilliseconds <= 0) {
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                console.log(intervalId);
                clearInterval(intervalId);
                return;
            }
            setHours(Math.floor(leftMilliseconds / 60 / 60 / 1000));
            setMinutes(Math.floor(leftMilliseconds / 60 / 1000) % 60);
            setSeconds(Math.floor(leftMilliseconds / 1000) % 60);
        }, 1000);

        //return () => clearInterval(intervalId);
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
