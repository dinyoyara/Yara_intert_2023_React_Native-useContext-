import { createSlice } from '@reduxjs/toolkit';

const DicesSlice = createSlice({
    name: 'dices',
    initialState: {
        dicesNumber: 4,
        diceSides: 6,
        selected: false
    },
    reducers: {
        setDicesNumber(state, action) {
            return { ...state, dicesNumber: action.payload };
        },
        setDiceSides(state, action) {
            return { ...state, diceSides: action.payload };
        },
        setSelected(state, action) {
            return { ...state, selected: action.payload };
        }
    }
});

export const dicesReducer = DicesSlice.reducer;
export const { setDicesNumber, setDiceSides, setSelected } = DicesSlice.actions;
