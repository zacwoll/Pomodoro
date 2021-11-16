import React, { useState } from 'react';
import styled from 'styled-components';
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
export function Footer () {
    // This would call in the count selector action that returns the count
    // const count = useAppSelector(selectCount);

    // This would call the dispatch to affect change to the count value
    const dispatch = useAppDispatch();

    // This would use state to store the incrementing amount
    // const [ incrementAmount, setIncrementAmount ] = useState('2');

    // This defines the increment value as either a Number (incrementAmount) and zero
    // const incrementValue = Number(incrementAmount) || 0;

    // Here I'll discuss what I believe the nav component should receive

    const Footer = styled.footer`
        margin-top: 40px;
        border-top: 2px solid #efefef;
        text-align: center;
        padding-top: 30px;
        color: hsl(357, 12%, 42%);
        padding-bottom: 20px;
    `;

    return (
        <Footer>
            <p>Made with love by Zac Woll</p>
            <p>2021</p>
        </Footer>
    );
}
