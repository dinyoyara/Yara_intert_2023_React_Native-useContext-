import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import Dice from '../../components/Dice';
import Form from '../../components/Form';
import { getArraySum, getBestResult, getDicesIndexArray, getDicesResultArray } from './helpers';
import useRollsContext from '../../context/rolls/hook';
import useDiceContext from '../../context/dice/hook';

import styles from './styles';

const HomeScreen = () => {
    const { rolls, rollDices, clearRolls } = useRollsContext();
    console.log(rolls);
    const { dice, setSelected } = useDiceContext();
    console.log(dice);
    const { dicesCount, diceSidesCount, selected } = dice;

    const roll = () => {
        rollDices(getDicesResultArray(dicesCount, diceSidesCount));
    };
    const restartGame = () => {
        clearRolls();
        setSelected(false);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Roll Dices App</Text>
                {rolls.length > 0 ? (
                    <Text style={styles.title}>
                        {rolls.length} rolls - best shot result : {getBestResult(rolls)} /{diceSidesCount * dicesCount}
                    </Text>
                ) : null}
                {!selected ? <Form /> : null}
            </View>

            <View style={styles.dices_container}>
                {getDicesIndexArray(dicesCount).map((x) => (
                    <Dice key={x} number={rolls.length > 0 ? rolls[rolls.length - 1][x] : diceSidesCount} />
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
