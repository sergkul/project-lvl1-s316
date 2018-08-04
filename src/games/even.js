import readlineSync from 'readline-sync';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const rounds = 3;

const evenGame = () => {
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

export default evenGame;
