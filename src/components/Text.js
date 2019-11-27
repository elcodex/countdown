import React from 'react';

export default function Text({text, textClassName}) {
    return (
        <div className={textClassName}>
            {text}
        </div>
    );
}