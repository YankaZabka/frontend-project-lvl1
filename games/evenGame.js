import greeting from '../src/cli.js';
import { gameStep, getRandomNumber, NUMBER_OF_ROUNDS } from '../src/index.js';

const evenGame = () => {
  const answers = [];

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== 'GAME OVER') {
    const question = getRandomNumber(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    const result = gameStep(userName, question, correctAnswer);
    answers.push(result);
  }

  if (answers[answers.length - 1] !== 'GAME OVER') {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenGame;
