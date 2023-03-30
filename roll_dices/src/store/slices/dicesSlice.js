import { createSlice } from '@reduxjs/toolkit';

const DicesSlice = createSlice({
    name: 'dices',
    initialState: {
        dicesNumber: 8,
        diceSides: 8
    },
    reducers: {
        setDicesNumber(state, action) {
            return { ...state, dicesNumber: action.payload };
        },
        setDiceSides(state, action) {
            return { ...state, diceSides: action.payload };
        }
    }
});

export const dicesReducer = DicesSlice.reducer;
export const { setDicesNumber, setDiceSides } = DicesSlice.actions;
