import readlineSync from 'readline-sync';

const randomNumber = limit => Math.floor(Math.random() * limit);

const rounds = 3;

const calcGame = () => {
  let question = '';
  let trueAnswer = 0;
  const operationsAmount = 3;

  for (let i = 1; i <= rounds; i += 1) {
    const num1 = randomNumber(100);
    const num2 = randomNumber(100);
    const operationIndex = randomNumber(operationsAmount);

    switch (operationIndex) {
      case 0:
        question = `${num1} + ${num2}`;
        trueAnswer = num1 + num2;
        break;
      case 1:
        question = `${num1} - ${num2}`;
        trueAnswer = num1 - num2;
        break;
      case 2:
        question = `${num1} * ${num2}`;
        trueAnswer = num1 * num2;
        break;
      default:
        break;
    }

    trueAnswer = String(trueAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return false;
    }

    console.log('Correct');
  }

  return true;
};

export default calcGame;
