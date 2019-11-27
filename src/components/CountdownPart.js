import React from 'react';

export default function CountdownPart({value, valueText, partClassName}) {

    const formattedNumber = number => {
        const prefix = number < 10 ? '0' : '';
        return prefix + number.toString();
    }

    return (
        <div className={partClassName}>
            <div>
                {formattedNumber(value)}
            </div>
            <div>
                {valueText}
            </div>
        </div>
    );
}