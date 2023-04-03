import { createContext, useState } from 'react';

const RollsContext = createContext();

const RollsProvider = ({ children }) => {
    const [rolls, setRolls] = useState([]);

    const rollDices = (currentRoll) => {
        setRolls([...rolls, currentRoll]);
    };

    const clearRolls = () => {
        setRolls([]);
    };

    const contextValue = {
        rolls,
        rollDices,
        clearRolls
    };

    return <RollsContext.Provider value={contextValue}>{children}</RollsContext.Provider>;
};

export default RollsProvider;
export { RollsContext };
