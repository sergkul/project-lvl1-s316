import game from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const randomNumber = limit => Math.floor(Math.random() * limit);

const getGcd = (a, b) => {
  const min = a <= b ? a : b;
  let gcd = 1;

  for (let i = 1; i <= min / 2; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
};

const getQuestion = () => {
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);

  return `${num1} ${num2}`
};

const trueAnswer = () => String(getGcd(num1, num2));

const getTrueAnswer = question => (isEven(question) ? 'yes' : 'no');

const startBrainGCDGame = () => game(rules, getQuestion, getTrueAnswer);

export default startBrainGCDGame;
