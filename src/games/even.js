import game from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const getQuestion = () => makeNumber();

const getTrueAnswer = question => (isEven(question) ? 'yes' : 'no');

const startBrainGameEven = () => game(rules, getQuestion, getTrueAnswer);

export default startBrainGameEven;
