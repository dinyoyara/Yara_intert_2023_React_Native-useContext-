import { createContext, useState } from 'react';

const DiceContext = createContext();

const DiceProvider = ({ children }) => {
    const [dice, setDice] = useState({
        dicesCount: 4,
        diceSidesCount: 6,
        selected: false
    });

    const setDicesCount = (dicesCount) => {
        setDice({ ...dice, dicesCount: dicesCount });
    };

    const setDiceSidesCount = (diceSidesCount) => {
        setDice({ ...dice, diceSidesCount: diceSidesCount });
    };

    const setSelected = (selected) => {
        setDice({ ...dice, selected: selected });
    };

    const contextValue = {
        dice,
        setDicesCount,
        setDiceSidesCount,
        setSelected
    };

    return <DiceContext.Provider value={contextValue}>{children}</DiceContext.Provider>;
};

export default DiceProvider;
export { DiceContext };
