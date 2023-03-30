import { configureStore } from '@reduxjs/toolkit';

import { rollsReducer, rollDices, clearRolls } from './slices/rollsSlice';
import { dicesReducer, setDiceSides, setDicesNumber } from './slices/dicesSlice';

const store = configureStore({
    reducer: {
        rolls: rollsReducer,
        dices: dicesReducer
    }
});

export { store, rollDices, clearRolls, setDiceSides, setDicesNumber };
