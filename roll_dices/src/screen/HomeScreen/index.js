import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import Dice from '../../components/Dice';
import { rollDices, clearRolls } from '../../store';

import styles from './styles';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const rolls = useSelector((state) => {
        console.log(state.rolls);
        return state.rolls;
    });
    const dices = useSelector((state) => {
        console.log(state.dices);
        return state.dices;
    });

    const getRandomNumber = (diceSides) => {
        return Math.floor(1 + Math.random() * diceSides);
    };
    const getDicesResultArray = (dicesNumber, diceSides) => {
        const arr = [];
        for (let i = 0; i < dicesNumber; i++) {
            arr.push(getRandomNumber(diceSides));
        }
        return arr;
    };
    const getBestResult = (rollsInfo) => {
        let result = 0;
        rollsInfo.forEach((x) => {
            result = getArraySum(x) > result ? getArraySum(x) : result;
        });
        return result;
    };
    const getArraySum = (arr) => {
        return arr.reduce((x, y) => x + y, 0);
    };

    const roll = () => {
        dispatch(rollDices(getDicesResultArray(dices.dicesNumber, dices.diceSides)));
    };

    const restartGame = () => {
        dispatch(clearRolls());
    };

    const dicesIndexArray = [];

    for (let i = 0; i < dices.dicesNumber; i++) {
        dicesIndexArray.push(i);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Roll Dices App</Text>
                {rolls.length > 0 ? (
                    <Text style={styles.title}>
                        {rolls.length} rolls - best shot result : {getBestResult(rolls)} /
                        {dices.diceSides * dices.dicesNumber}
                    </Text>
                ) : null}
            </View>
            <View style={styles.dices_container}>
                {dicesIndexArray.map((x) => (
                    <Dice key={x} number={rolls.length > 0 ? rolls[rolls.length - 1][x] : dices.diceSides} />
                ))}
            </View>
            <View>
                {rolls.length > 0 ? (
                    <Text style={styles.title}>{getArraySum(rolls[rolls.length - 1])} points</Text>
                ) : null}
                <Button title='Roll' click={roll} />
                <Button title='Restart' click={restartGame} />
            </View>
        </View>
    );
};

export default HomeScreen;
