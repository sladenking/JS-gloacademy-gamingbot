'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
  let tryNum = 9;

  const Game = (tryNum, message = `Угадайте число от 1 до 100! У вас ${tryNum + 1} попыток`) => {
    let input = prompt(message);
    let ourNum = parseInt(Math.random() * 100);
    console.log('input: ', input, 'ourNum: ', ourNum);
    if (input === null) {
      return alert('Игра окончена! До скорых встреч!');
    } else if (!isNumber(input)) {
      return Game( tryNum, "Введите число!");
    } else if (input < ourNum && tryNum !== 0) {
      tryNum--;
      return Game(tryNum, `Загаданное число больше! Осталось ${tryNum + 1} попыток`);
    } else if (input > ourNum && tryNum !== 0) {
      tryNum--;
      return Game(tryNum, `Загаданное число меньше! Осталось ${tryNum + 1} попыток`);
    } else if (+ input === ourNum) {
      let restart = confirm('Поздравляем! Вы угадали число! Хотели бы сыграть еще?');
      if (restart === true) {
        Game(9);
      } else {
        return alert('Спасибо за участие! До скорых встреч!');
      }
    } else if (tryNum === 0) {
      let restart = confirm('Попытки закончились, хотите сыграть еще?');
      if (restart === true) {
        Game(9);
      } else {
        return alert('Спасибо за участие! До скорых встреч!');
      }
    }
  };
  return Game(tryNum);
  // console.dir(Game());
};

start();