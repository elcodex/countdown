function Text(props) {
    return (
        <div className={props.textClassName}>
            {props.text}
        </div>
    );
}