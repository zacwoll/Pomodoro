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
export function Hero () {
    // This would call in the count selector action that returns the count
    // const count = useAppSelector(selectCount);

    // This would call the dispatch to affect change to the count value
    const dispatch = useAppDispatch();

    // This would use state to store the incrementing amount
    // const [ incrementAmount, setIncrementAmount ] = useState('2');

    // This defines the increment value as either a Number (incrementAmount) and zero
    // const incrementValue = Number(incrementAmount) || 0;

    // Components used in the app
    const Hero = styled.div`
        padding: 0px 12px;
        max-width: 620px; // Probably change this to 480
        margin: auto;
    `;

    const ProgressBar = styled.div`
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
        margin-bottom: 40px;
    `;

    const TimeDisplayContainer = styled.div`
        max-width: 480px;
        margin: auto;
    `;

    const TimeDisplay = styled.div`
        background-color: rgb(255, 255, 255, 0.1);
        padding: 20px 0px 30px;
        border-radius: 6px;
        margin-bottom: 20px;
        width: 100%;
    `;

    // We'll add some JavaScript to show which of these Timer Options is highlighted.
    const TimerOptionsGroup = styled.div`
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    `;

    const TimerOptionTab = styled.button`
        border: none;
        color: white;
        margin: 0px;
        border-radius: 4px;
        font-size: 16px;
        padding: 2px 12px;
        cursor: pointer;
        background: none;
        font-weight: 300;
        width: min-content;
    `;

    const TimerOptionTabSelected = styled(TimerOptionTab)`
        background-color: rgba(0, 0, 0, 0.15);
        font-weight: bold;
    `

    const TimeRemainingText = styled.h1`
        font-size: 120px;
        font-weight: bold;
        margin-top: 20px;
        @media (max-width: 680px) {
            font-size: 100px;
        }
    `

    const TimeControlsGroup = styled.div`
        position: relative;
        display: inline-block;
        width: 100%;
    `;

    const StartTimerButton = styled.div`
        cursor: pointer;
        border: none;
        margin: 20px 0px 0px;
        padding: 0px 12px;
        border-radius: 4px;
        box-shadow: rgb(235 235 235) 0px 6px 0px;
        font-size: 22px;
        font-weight: bold;
        height: 55px;
        width: 200px;
        color: var(--brand-color);
        background-color: white;
        transition: color 0.5s ease-in-out 0s;
    `

    const StopTimerButton = styled(StartTimerButton)`
        transform: translateY(6px);
        box-shadow: none;
    `

    const SkipEndButtonContainer = styled.div`
        width: calc((100% - 200px) / 2 + 5%);
        position: absolute;
        right: 0px;
        bottom: -6px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const SkipEndButton = styled.button`
        cursor: pointer;
        background: none;
        border: none;
        width: 28px;
        height: 28px;
        align-items: center;
        justify-content: center;
        bottom: 9px;
        right: -50px;
        opacity: 1;
        transition: all 0.2s ease-out 0s;
    `

    const SkipEndIcon = styled.img`
        width: 22px;
        opacity: 0.9;
    `

    const PomodoroIterationDisplay = styled.div`
        font-size: 16px;
        opacity: 0.6;
        margin-bottom: 4px;
    `;

    const CurrentTaskDisplay = styled.div`
        font-size: 18px;
        font-weight: 100;
        color: white;
        overflow-wrap: break-word;
    `


    return (
        <Hero>
            <TimeDisplayContainer>
                <TimeDisplay>
                    <TimerOptionsGroup>
                        <TimerOptionTabSelected id="Pomodoro">Pomodoro</TimerOptionTabSelected>
                        <TimerOptionTab id="ShortBreak">Short Break</TimerOptionTab>
                        <TimerOptionTab id="LongBreak">Long Break</TimerOptionTab>
                    </TimerOptionsGroup>

                    <TimeRemainingText>
                    </TimeRemainingText>
                    <ProgressBar></ProgressBar>
                    <TimeControlsGroup>
                        <StartTimerButton></StartTimerButton>
                        <SkipEndButtonContainer>
                            <SkipEndButton>
                            <SkipEndIcon alt="Skip" src="" />
                            </SkipEndButton>
                        </SkipEndButtonContainer>
                    </TimeControlsGroup>
                </TimeDisplay>
                <PomodoroIterationDisplay></PomodoroIterationDisplay>
                <CurrentTaskDisplay></CurrentTaskDisplay>
            </TimeDisplayContainer>
            <div className="TaskDisplay">
                <p>Tasks</p>
                <br />
                <div className="TaskArea"></div>
                <div className="AddTask"></div>
                <div className="Projections"></div>
            </div>
        </Hero>
    );
}
