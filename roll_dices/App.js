import React from 'react';

import ContextProvider from './src/context';
import HomeScreen from './src/screen/HomeScreen';

function App() {
    return (
        <ContextProvider>
            <HomeScreen />
        </ContextProvider>
    );
}

export default App;
