import { useContext } from 'react';
import { RollsContext } from '.';

function useRollsContext() {
    return useContext(RollsContext);
}

export default useRollsContext;
