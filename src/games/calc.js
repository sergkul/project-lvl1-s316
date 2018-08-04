import game from '..';

const rules = 'What is the result of the expression?.\n';

const randomNumber = limit => Math.floor(Math.random() * limit);

const getQuestion = () => {
  const operationsAmount = 3;
  const operationIndex = randomNumber(operationsAmount);
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);

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
};

const getTrueAnswer = question => (/* */);

const startBrainCalcGame = () => game(rules, getQuestion, getTrueAnswer);

export default startBrainCalcGame;
