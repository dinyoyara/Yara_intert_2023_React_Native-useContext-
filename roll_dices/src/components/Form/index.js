import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';

import Button from '../Button';
import useDiceContext from '../../context/dice/hook';

const Form = () => {
    const [diceCount, setDiceCount] = useState(4);
    const [sidesCount, setSidesCount] = useState(6);

    const { setDiceParams } = useDiceContext();

    const changeDiceCount = (e) => {
        setDiceCount(e);
    };

    const changeSidesCount = (e) => {
        setSidesCount(e);
    };

    const formSubmit = () => {
        setDiceParams(+diceCount, +sidesCount, true);
    };

    return (
        <>
            <Text>Dice count:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeDiceCount} value={diceCount} placeholder='4' />
            <Text>Dice sides count:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeSidesCount} value={sidesCount} placeholder='6' />
            <Button title='Submit' click={formSubmit} />
        </>
    );
};

export default Form;
