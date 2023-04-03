const getRandomNumber = (diceSides) => {
    return Math.floor(1 + Math.random() * diceSides);
};

export const getDiceResultArray = (diceCount, diceSidesCount) => {
    const arr = [];
    for (let i = 0; i < diceCount; i++) {
        arr.push(getRandomNumber(diceSidesCount));
    }
    return arr;
};

export const getBestResult = (rollsInfo) => {
    let result = 0;
    rollsInfo.forEach((x) => {
        result = getArraySum(x) > result ? getArraySum(x) : result;
    });
    return result;
};

export const getArraySum = (arr) => {
    return arr.reduce((x, y) => x + y, 0);
};

export const getDiceIndexArray = (diceCount) => {
    const diceIndexArray = [];

    for (let i = 0; i < diceCount; i++) {
        diceIndexArray.push(i);
    }
    return diceIndexArray;
};
