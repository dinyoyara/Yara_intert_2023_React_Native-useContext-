import { createContext, useState } from 'react';

const DiceContext = createContext();

const DiceProvider = ({ children }) => {
    const [dice, setDice] = useState({
        diceCount: 4,
        diceSidesCount: 6,
        selected: false
    });

    const setDiceParams = (diceCount, diceSidesCount, selected) => {
        setDice({ diceCount, diceSidesCount, selected });
    };

    const setSelected = (selected) => {
        setDice({ ...dice, selected: selected });
    };

    const contextValue = {
        dice,
        setDiceParams,
        setSelected
    };

    return <DiceContext.Provider value={contextValue}>{children}</DiceContext.Provider>;
};

export default DiceProvider;
export { DiceContext };
