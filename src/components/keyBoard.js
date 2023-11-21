import React from 'react';
import './keyBoard.css';


export function KeyBoard(props) {
        return (
                <div id='letter' onClick={props.onClick}>
                        <p>{props.letter}</p>

                </div>
        );
}