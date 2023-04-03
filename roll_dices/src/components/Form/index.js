import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';

import Button from '../Button';
import useDiceContext from '../../context/dice/hook';

const Form = () => {
    const [dices, setDices] = useState(4);
    const [sides, setSides] = useState(6);

    const { setDicesCount, setDiceSidesCount, setSelected } = useDiceContext();

    const changeDicesCount = (e) => {
        setDices(e);
    };

    const changeSidesCount = (e) => {
        setSides(e);
    };

    const formSubmit = () => {
        setDicesCount(dices);
        setDiceSidesCount(sides);
        setSelected(true);
    };

    return (
        <>
            <Text>Dices count:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeDicesCount} value={dices} placeholder='4' />
            <Text>Dice sides count:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeSidesCount} value={sides} placeholder='6' />
            <Button title='Submit' click={formSubmit} />
        </>
    );
};

export default Form;
