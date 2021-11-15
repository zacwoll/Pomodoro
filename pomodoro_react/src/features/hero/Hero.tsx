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
export function Hero () {
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
        <div className="Hero">
            <div className="progress-bar"></div>
            <div className="TimeDisplay">
                <div className="TimerOptions">
                    <div className="PomodoroTab"></div>
                    <div className="ShortBreakTab"></div>
                    <div className="LongBreakTab"></div>
                </div>
                <div className="TimeRemaining">
                </div>
                <button className="StartTimer"></button>
            </div>
            <div className="TaskDisplay">
                <p>Tasks</p>
                <br />
                <div className="TaskArea"></div>
                <div className="AddTask"></div>
                <div className="Projections"></div>
            </div>
        </div>
    );
}
