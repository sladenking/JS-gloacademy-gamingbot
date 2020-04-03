'use strict';

const isNum = function(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};

const getRandomNum = function(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCounter = function() {
  let counter = 0;
  return function() {
    return ++counter;
  };
};

const gameRandom = function (attemps) {
  const randomNum = getRandomNum(1, 100);
  console.log('randomNum: ', randomNum);
  const counter = getCounter();

  return (function checkNum() {
    const count = counter();
    const userNum = prompt('Угадайте число от 1 до 100!');

    if (!isNum(userNum)) {
      if (userNum !== null) {
        alert('Введите число!');
        checkNum();
      }
    } else {
      let repeat = false;
      if (count < attemps) {
        const num = +userNum;
        if (num > randomNum) {
          alert(`Загаданное число меньше!`);
          return checkNum();
        }
        if (num < randomNum) {
          alert(`Загаданное число больше!`);
          return checkNum();
        }
        repeat = confirm('Поздравляем! Вы угадали число! Хотели бы сыграть еще?');
        
      } else {
        repeat = confirm('Попытки закончились, хотите сыграть еще?');
      }
      if (repeat) {gameRandom(attemps);}
    }
    return alert('Спасибо за участие! До скорых встреч!');
  }());
};

gameRandom(10);