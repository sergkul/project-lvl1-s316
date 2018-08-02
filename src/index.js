import readlineSync from 'readline-sync';

let gameOver = false;
let username = '';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const checkAnswer = (ans, num) => {
  const trueAns = isEven(num) ? 'yes' : 'no';

  if (ans === trueAns) {
    console.log('Correct');
  } else {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${trueAns}.\nLet's try again, ${username}!`);
    gameOver = true;
  }
};

const askQuestion = () => {
  const question = makeNumber();

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  checkAnswer(answer, question);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!\n`);
};

export const startBrainEvenGame = () => {
  greeting();

  const rounds = 3;

  for (let i = 1; i <= rounds; i += 1) {
    if (gameOver) break;
    askQuestion();
  }

  if (!gameOver) {
    console.log(`Congratulations, ${username}!`);
  }
};
