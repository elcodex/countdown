function CountdownPart(props) {

    const formattedNumber = number => {
        const prefix = number < 10 ? '0' : '';
        return prefix + number.toString();
    }

    return (
        <div className={props.partClassName}>
            <div>
                {formattedNumber(props.value)}
            </div>
            <div>
                {props.valueText}
            </div>
        </div>
    );
}