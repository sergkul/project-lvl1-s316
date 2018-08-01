import readlineSync from 'readline-sync';

export const greeting = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export const startGame = () => {
  let gameOver = false;
  let attepmt = 1;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const makeNumber = () => Math.floor(Math.random() * 100 + 1);

  const checkNumber = n => (n % 2 === 0 ? 'yes' : 'no');

  const checkAnswer = (ans, num) => {
    const trueAns = checkNumber(num);

    if ((ans !== 'yes' && ans !== 'no') || ans !== trueAns) {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${trueAns}.\nLet's try again, ${name}!`);
      gameOver = true;
    } else {
      console.log('Correct');
      attepmt += 1;
    }
  };

  const askQuestion = () => {
    const number = makeNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    checkAnswer(answer, number);
  };

  while (!gameOver && attepmt <= 3) {
    askQuestion();
  }

  if (attepmt === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};
