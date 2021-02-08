class ArrayUtilities {
  /* Your magic here */
  static addZeros = numbers => numbers.map(number => number * 10);
  static moreThanFifty = addZeros => addZeros.filter(item => item > 50);
  static removeFirst = moreThanFifty => {
    // moreThanFifty.splice(0, 1);
    moreThanFifty.shift();
    return moreThanFifty;
  };
  static sumAll = noFirst =>
    noFirst.reduce((total, current) => total + current, 0);
  static divide = sumAll => sumAll.toString().split('');
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
