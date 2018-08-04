import readlineSync from 'readline-sync';

const rounds = 3;

const playRounds = (getQuestion, getTrueAnswer) => {
  for (let i = 1; i <= rounds; i += 1) {
    const question = getQuestion();

    console.log(`Question: ${question}`);

    const trueAnswer = getTrueAnswer(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return false;
    }

    console.log('Correct');
  }

  return true;
};

const game = (rules, getQuestion, getTrueAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const isWin = playRounds(getQuestion, getTrueAnswer);

  if (isWin) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default game;
