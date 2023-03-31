import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import { setDicesNumber, setDiceSides, setSelected } from '../../store';

const Form = () => {
    const [number, setNumber] = useState(4);
    const [type, setType] = useState(6);

    const dispatch = useDispatch();

    const changeDicesNumber = (e) => {
        setNumber(e);
    };

    const changeDiceType = (e) => {
        setType(e);
    };

    const formSubmit = () => {
        dispatch(setDiceSides(type));
        dispatch(setDicesNumber(number));
        dispatch(setSelected(true));
    };

    return (
        <>
            <Text>Number:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeDicesNumber} value={number} placeholder='4' />
            <Text>Type:</Text>
            <TextInput keyboardType='numeric' onChangeText={changeDiceType} value={type} placeholder='6' />
            <Button title='Submit' click={formSubmit} />
        </>
    );
};

export default Form;
