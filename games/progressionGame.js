import greeting from "../src/cli.js";
import {gameStep, getRandomNumber, generateProgression ,NUMBER_OF_ROUNDS, PROGRESSION_LENGTH} from "../src/index.js";

const progressionGame = () => {
    const answers = [];

    const userName = greeting();
    console.log('What number is missing in the progression?');

    while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== 'GAME OVER') {
        const questionObject = {
            progression: generateProgression(getRandomNumber(1, 10), getRandomNumber(1,10), PROGRESSION_LENGTH),
            emptyIndex: getRandomNumber(0, 10)
        };
        const question = questionObject.progression
            .map((item, index) => index === questionObject.emptyIndex ? ".." : item)
            .join(" ");
        const correctAnswer = questionObject.progression[questionObject.emptyIndex].toString();
        const result = gameStep(userName, question, correctAnswer);
        answers.push(result);
    }

    if (answers[answers.length - 1] !== 'GAME OVER') {
        console.log(`Congratulations, ${userName}!`);
    }
}

export default progressionGame