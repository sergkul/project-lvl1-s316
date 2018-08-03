import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';

const startBrainGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  let game = null;

  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      game = evenGame;
      break;
    case 'calc':
      console.log('What is the result of the expression?\n');
      game = calcGame;
      break;
    default:
      break;
  }

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!\n`);

  if (game()) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default startBrainGame;
