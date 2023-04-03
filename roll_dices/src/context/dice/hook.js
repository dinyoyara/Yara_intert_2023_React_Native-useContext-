import { useContext } from 'react';
import { DiceContext } from '.';

function useDiceContext() {
    return useContext(DiceContext);
}

export default useDiceContext;
