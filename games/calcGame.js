import greeting from '../src/cli.js';
import { gameStep, getRandomNumber, NUMBER_OF_ROUNDS } from '../src/index.js';

const calcGame = () => {
  const answers = [];
  const possibleOperators = ['-', '+', '*'];

  const userName = greeting();
  console.log('What is the result of the expression?');

  while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== 'GAME OVER') {
    const questionObject = {
      firstOperand: getRandomNumber(1, 100),
      operator: possibleOperators[getRandomNumber(0, 2)],
      secondOperand: getRandomNumber(1, 100),
      calculate() {
        switch (this.operator) {
          case '-':
            return this.firstOperand - this.secondOperand;
          case '+':
            return this.firstOperand + this.secondOperand;
          case '*':
            return this.firstOperand * this.secondOperand;
          default:
            console.log('Error');
            return 'ERROR';
        }
      },
    };
    const question = `${questionObject.firstOperand} ${questionObject.operator} ${questionObject.secondOperand}`;
    const correctAnswer = questionObject.calculate().toString();
    const result = gameStep(userName, question, correctAnswer);
    answers.push(result);
  }

  if (answers[answers.length - 1] !== 'GAME OVER') {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default calcGame;
