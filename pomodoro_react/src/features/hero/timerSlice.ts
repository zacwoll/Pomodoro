import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface TimersLengthState {
    pomodoroTimerLength: number,
    shortTimerLength: number,
    longTimerLength: number,
}

// Defaults 25, 5, 15 minutes
// 25 min * 60 sec/min = 1500s
// 5 min * 60 sec/min = 300s
// 15 min * 60 sec/min = 900s
const initialState: TimersLengthState = {
    pomodoroTimerLength: 1500,
    shortTimerLength: 300,
    longTimerLength: 900,
}


export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPomodoro: (state, action: PayloadAction<number>) => {
            state.pomodoroTimerLength = action.payload
        },
        setShortBreak: (state, action: PayloadAction<number>) => {
            state.shortTimerLength = action.payload;
        },
        setLongBreak: (state, action: PayloadAction<number>) => {
            state.longTimerLength = action.payload;
        },
    },
});

export const { setPomodoro, setShortBreak, setLongBreak } = timerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPomodoroTimer = (state: RootState) => state.timer.pomodoroTimerLength;
export const selectShortBreakTimer = (state: RootState) => state.timer.shortTimerLength;
export const selectLongBreakTimer = (state: RootState) => state.timer.longTimerLength;


export default timerSlice.reducer;
