import readlineSync from 'readline-sync';

export const NUMBER_OF_ROUNDS = 3;
export const PROGRESSION_LENGTH = 10

export const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

export const generateProgression = (start, diff, length) => {
  const progression = new Array(length).fill()
  return progression.map((item, index) => {
    if (index === 0) {
      return start
    } else {
      return start + (diff * index)
    }
  })
}

export const gameStep = (userName, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return answer;
  }
  console.log(`"${answer}" is a wrong answer ;(. Correct answer is "${correctAnswer}"`);
  console.log(`Let's try again, ${userName}`);
  return 'GAME OVER';
};