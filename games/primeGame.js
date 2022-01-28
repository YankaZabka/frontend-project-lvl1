import greeting from '../src/cli.js';
import { gameStep, getRandomNumber, NUMBER_OF_ROUNDS } from '../src/index.js';

const primeGame = () => {
  const answers = [];

  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== 'GAME OVER') {
    const questionObject = {
      number: getRandomNumber(1, 100),
      calculate() {
        for (let i = 2; i <= this.number / 2; i += 1) {
          if (this.number % i === 0) {
            return 'no';
          }
        }
        return 'yes';
      },
    };
    const question = questionObject.number;
    const correctAnswer = questionObject.calculate();
    const result = gameStep(userName, question, correctAnswer);
    answers.push(result);
  }

  if (answers[answers.length - 1] !== 'GAME OVER') {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default primeGame;
