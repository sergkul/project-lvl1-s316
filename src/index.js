import readlineSync from 'readline-sync';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const rounds = 3;

const askQuestion = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const question = makeNumber();

    console.log(`Question: ${question}`);

    const trueAnswer = isEven(question) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return false;
    }

    console.log('Correct');
  }

  return true;
};

const startBrainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!\n`);

  if (askQuestion()) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default startBrainEvenGame;
