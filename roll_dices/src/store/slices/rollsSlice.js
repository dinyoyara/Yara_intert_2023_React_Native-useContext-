import { createSlice } from '@reduxjs/toolkit';

const RollsSlice = createSlice({
    name: 'rolls',
    initialState: [],
    reducers: {
        rollDices(state, action) {
            state.push(action.payload);
        },
        clearRolls(state, action) {
            return [];
        }
    }
});

export const rollsReducer = RollsSlice.reducer;
export const { rollDices, clearRolls } = RollsSlice.actions;
