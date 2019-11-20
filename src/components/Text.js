import React from 'react';
import ReactDOM from 'react-dom';

export default function Text(props) {
    return (
        <div className={props.textClassName}>
            {props.text}
        </div>
    );
}