import React, { useState } from 'react';
import kitchen_timer from '../../assets/images/kitchen-timer.png';
import styled from "styled-components";

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


    /* Nav Styles */
    const Nav = styled.nav`
        padding: 0px 12px;
        max-width: 620px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    `;

    // Icon + Text
    const Brand = styled.div`
        display: inline-block;
        color: white;
        margin: 0px;
        padding: 10px 0px;
        font-size: 20px;
    `;

    // Brand Icon
    const BrandIcon = styled.img`
        width: 20px;
        margin-right: 4px;
    `;

    // Brand Text
    const BrandText = styled.div`
        font-size: inherit;
        display: inline;
    `;

    // Button Containers
    const NavButtonContainer = styled.div`
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    `;

    // Report Modal Launch styles
    const GenericNavButton = styled.button`
        padding: 8px 12px;
        min-width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0.9;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: none;
        margin-left: 10px;
        font-size: 13px;
        border: none;
        color: white;

        @media (max-width: 576px) {
            padding: 8px;
            min-width: auto;
        }
    `;

    // Report Modal Icon
    const GenericNavButtonIcon = styled.i`
        width: 16px;
        height: 14px;

        @media (max-width: 576px) {
            width: 18px;
            height: 12px;
        }
    `;

    // Report Modal Text
    const GenericNavButtonText = styled.div`
        display: block;
        margin-left: 4px;

        @media (max-width: 576px) {
            display: none;
        }
    `;

    // Settings Modal Launch styles
    const SettingsModalLaunch = styled.button`

    `;

    // Login Modal Launch styles
    const LoginModalLaunch = styled.button`

    `;



    return (
        <Nav>
            <Brand>
                <BrandIcon src={kitchen_timer} alt="Cute Tomato Timer" />
                <BrandText>PomoStudy</BrandText>
            </Brand>
            <NavButtonContainer>
                <GenericNavButton id="ReportButton">
                    <GenericNavButtonIcon className="fas fa-chart-line" />
                    <GenericNavButtonText>Report</GenericNavButtonText>
                </GenericNavButton>

                <GenericNavButton id="SettingsButton">
                    <GenericNavButtonIcon className="fas fa-cog" />
                    <GenericNavButtonText>Settings</GenericNavButtonText>
                </GenericNavButton>

                <GenericNavButton id="LoginButton">
                    <GenericNavButtonIcon className="fas fa-sign-in-alt" />
                    <GenericNavButtonText>Login</GenericNavButtonText>
                </GenericNavButton>
            </NavButtonContainer>
        </Nav>
    );
}
