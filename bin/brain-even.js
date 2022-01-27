#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evenGame = () => {
  const NUMBER_OF_ROUNDS = 3
  const answers = [];

  const gameStep = (userName) => {
    const number = Math.floor(1 + Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && number % 2 === 0) {
      answers.push(answer);
      console.log('Correct!');
    } else if (answer === 'no' && number % 2 !== 0) {
      answers.push(answer);
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is a wrong answer ;(. Correct answer is "${answer === 'no' ? 'yes' : 'no'}"`);
      console.log(`Let's try again, ${userName}`);
      while (answers.length < NUMBER_OF_ROUNDS) {
        answers.push("wrong")
      }
    }
  };

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  while (answers.length < NUMBER_OF_ROUNDS && answers[answers.length - 1] !== "wrong") {
    gameStep(userName);
  }

  answers[answers.length - 1] !== "wrong" ? console.log(`Congratulations, ${userName}!`) : null;
};

evenGame();
