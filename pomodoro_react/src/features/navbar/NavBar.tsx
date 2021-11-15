import React, { useState } from 'react';
import kitchen_timer from '../../assets/images/kitchen-timer.png';

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
export function NavBar () {
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
        <div className="nav">
            <div className="AppName">
                <img className="AppLogo" src={kitchen_timer} alt="Cute Tomato Timer" />
                <p className="AppText">PomoStudy</p>
            </div>
            <div className="NavButtonsGroup">
                <button className="Report"></button>
                <button className="Settings"></button>
                <button className="Login"></button>
            </div>
        </div>
    );
}
