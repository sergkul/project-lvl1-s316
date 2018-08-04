import readlineSync from 'readline-sync';

const randomNumber = limit => Math.floor(Math.random() * limit);

const getGcd = (a, b) => {
  const min = a <= b ? a : b;
  let gcd = 1;

  for (let i = 1; i <= min / 2; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
};

const rounds = 3;

const gcdGame = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const num1 = randomNumber(100);
    const num2 = randomNumber(100);

    console.log(`Question: ${num1} ${num2}`);

    const trueAnswer = String(getGcd(num1, num2));
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return false;
    }

    console.log('Correct');
  }

  return true;
};

const startBrainGCDGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!\n`);

  if (gcdGame()) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default startBrainGCDGame;
