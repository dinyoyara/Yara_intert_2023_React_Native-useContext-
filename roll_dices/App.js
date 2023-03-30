import React from 'react';
import { Provider } from 'react-redux';

import HomeScreen from './src/screen/HomeScreen';
import { store } from './src/store';

function App() {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
}

export default App;
