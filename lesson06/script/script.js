'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let ourNum = Math.floor(Math.random() * 101);
function Game(ourNum, message = 'Угадай число от 1 до 100') {
  let input = prompt(message);
  console.log('input: ', input, 'ourNum: ', ourNum);
  if (input === null) {
    return alert('Игра окончена!');
  } else if (!isNumber(input)) {
    return Game(ourNum, "Введите число!");
  } else if (input < ourNum) {
    return Game(ourNum, "Загаданное число больше!");
  } else if (input > ourNum) {
    return Game(ourNum, "Загаданное число меньше!");
  } else if (+ input === ourNum) {
    return alert('Вы угадали число!');
  }
}

Game(ourNum);