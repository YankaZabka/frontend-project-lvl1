import greeting from '../src/cli.js';
import {
  gameStep, getRandomNumber, calcGreatestCommonDivisor, NUMBER_OF_ROUNDS,
} from '../src/index.js';

const gcdGame = () => {
  const answers = [];

  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== 'GAME OVER') {
    const questionObject = {
      firstNumber: getRandomNumber(1, 100),
      secondNumber: getRandomNumber(1, 100),
      calculate(x, y) {
        if (y > x) return this.calculate(y, x);
        if (!y) return x;
        return this.calculate(y, x % y);
      },
    };
    const question = `${questionObject.firstNumber} ${questionObject.secondNumber}`;
    const correctAnswer = calcGreatestCommonDivisor(
      questionObject.firstNumber,
      questionObject.secondNumber,
    )
      .toString();

    const result = gameStep(userName, question, correctAnswer);
    answers.push(result);
  }

  if (answers[answers.length - 1] !== 'GAME OVER') {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gcdGame;
