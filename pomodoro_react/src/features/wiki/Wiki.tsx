import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
/*
// The action imports from the counterSlice reducer
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './counterSlice';
// The styles imports from a css module
import styles from './Counter.module.css';
*/
export function Wiki () {
    // This would call in the count selector action that returns the count
    // const count = useAppSelector(selectCount);

    // This would call the dispatch to affect change to the count value
    const dispatch = useAppDispatch();

    // This would use state to store the incrementing amount
    // const [ incrementAmount, setIncrementAmount ] = useState('2');

    // This defines the increment value as either a Number (incrementAmount) and zero
    // const incrementValue = Number(incrementAmount) || 0;

    // Here I'll discuss what I believe the nav component should receive

    return (
        <div className="Wiki">
            <h1>An online Pomodoro Timer to boost your productivity</h1>

            <div className="WikiEntry">
                <h2>What is Pomostudy?</h2>
                <p>Pomostudy is a customizable pomodoro timer that works on desktop and mobile browser.</p>
            </div>

            <div className="WikiEntry">
                <h2>What is Pomostudy?</h2>
                <p>Pomostudy is a customizable pomodoro timer that works on desktop and mobile browser.</p>
            </div>

            <div className="WikiEntry">
                <h2>What is Pomostudy?</h2>
                <p>Pomostudy is a customizable pomodoro timer that works on desktop and mobile browser.</p>
            </div>

            <div className="WikiEntry">
                <h2>What is Pomostudy?</h2>
                <p>Pomostudy is a customizable pomodoro timer that works on desktop and mobile browser.</p>
            </div>
        </div>
    );
}
