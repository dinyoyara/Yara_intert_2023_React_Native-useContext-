import DiceProvider from './dice';
import RollsProvider from './rolls';

function ContextProvider({ children }) {
    return (
        <DiceProvider>
            <RollsProvider>{children}</RollsProvider>
        </DiceProvider>
    );
}

export default ContextProvider;
