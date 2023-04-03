import { createContext, useState } from 'react';

const RollsContext = createContext();

const RollsProvider = ({ children }) => {
    const [rolls, setRolls] = useState([]);

    const rollDice = (currentRoll) => {
        setRolls([...rolls, currentRoll]);
    };

    const clearRolls = () => {
        setRolls([]);
    };

    const contextValue = {
        rolls,
        rollDice,
        clearRolls
    };

    return <RollsContext.Provider value={contextValue}>{children}</RollsContext.Provider>;
};

export default RollsProvider;
export { RollsContext };
