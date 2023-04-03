import React from 'react';

import DiceProvider from './src/context/dice';
import RollsProvider from './src/context/rolls';
import HomeScreen from './src/screen/HomeScreen';

function App() {
    return (
        <DiceProvider>
            <RollsProvider>
                <HomeScreen />
            </RollsProvider>
        </DiceProvider>
    );
}

export default App;
