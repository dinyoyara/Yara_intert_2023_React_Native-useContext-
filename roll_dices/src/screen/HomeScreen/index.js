import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Dice from '../../components/Dice';

import styles from './styles';

const HomeScreen = () => {
    const [first, setFirst] = useState(6);
    const [second, setSecond] = useState(6);
    const [third, setThird] = useState(6);
    const [fourth, setFourth] = useState(6);
    const [rolled, setRolled] = useState(false);

    function getRandomNumber(max) {
        return Math.floor(1 + Math.random() * max);
    }

    const rollDices = () => {
        setFirst(getRandomNumber(6));
        setSecond(getRandomNumber(6));
        setThird(getRandomNumber(6));
        setFourth(getRandomNumber(6));
        setRolled(true);
    };

    const restartGame = () => {
        setRolled(false);
        setFirst(6);
        setSecond(6);
        setThird(6);
        setFourth(6);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dices App</Text>
            <View style={styles.dices_container}>
                <Dice number={first} />
                <Dice number={second} />
                <Dice number={third} />
                <Dice number={fourth} />
            </View>
            {rolled ? (
                <Text style={{ ...styles.title, ...styles.result }}>{first + second + third + fourth} points</Text>
            ) : null}
            <View style={styles.buttons_container}>
                <Button title='Roll' click={rollDices} />
                <Button title='Restart' click={restartGame} />
            </View>
        </View>
    );
};

export default HomeScreen;
