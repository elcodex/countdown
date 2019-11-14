function CountdownPart(props) {
    return (
        <div className={props.partClassName}>
            <div>
                {props.value}
            </div>
            <div>
                {props.valueText}
            </div>
        </div>
    );
}