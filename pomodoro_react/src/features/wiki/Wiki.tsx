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

    const Wiki = styled.div`
        margin-top: 30px;
        margin: auto;
        padding: 0 12px;
    `

    const WikiTitle = styled.h1`
        margin-top: 50px;
        margin-bottom: 20px;
        line-height: 1.4em;
        @media (max-width: 680px) {
            margin-top: 20px;
            margin-bottom: 0px;

            font-size: 24px;
        }
    `

    const WikiContainer = styled.div`
        max-width: 620px;
        margin: auto;
        padding: 0 12px;
    `

    const WikiHeader = styled.h2`
        font-size: 20px;
        color: hsl(357, 50%, 22%);
        margin-top: 1.8rem;
        margin-bottom: 0em;
        line-height: 1.4em;
        @media screen and (max-width: 680px) {
            letter-spacing: -0.2px;
        }

        &:after {
            content: '';
            display: block;
            width: 24px;
            padding-top: 8px;
            border-bottom: 4px solid #f05b56;
            opacity: 0.6;
        }
    `

    const WikiParagraph = styled.p`
        font-size: 18px;
        line-height: 1.6em;
        color: hsl(357, 12%, 42%);

        @media (max-width: 680px) {
            font-size: 16px;
        }
    `

    return (
        <Wiki>
            <WikiTitle>An online Pomodoro Timer to boost your productivity</WikiTitle>

            <WikiContainer>
                <WikiHeader>What is Pomostudy?</WikiHeader>
                <WikiParagraph>Pomostudy is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</WikiParagraph>
            </WikiContainer>

            <WikiContainer>
                <WikiHeader>What is Pomodoro Technique?</WikiHeader>
                <WikiParagraph>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a></WikiParagraph>
            </WikiContainer>

            <WikiContainer>
                <WikiHeader>How to use the Pomodoro Timer</WikiHeader>
                <WikiParagraph>Pomostudy is a customizable pomodoro timer that works on desktop and mobile browser.</WikiParagraph>
            </WikiContainer>

            <WikiContainer>
                <WikiHeader>Features</WikiHeader>
                <WikiParagraph> Responsive design that works with desktop and mobile
                    Color transition to switch moods between work time and rest time
                    Audio notification at the end of a timer period
                    Customizable timer intervals to suit your preference</WikiParagraph>
            </WikiContainer>
        </Wiki>
    );
}
