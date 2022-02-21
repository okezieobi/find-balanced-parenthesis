const input = '(((([{}]))))';

function findBalanced(string = '') {
  if (typeof string !== 'string') throw new TypeError('Argument must be string type');
  const array = string.split('');
  if (array.length % 2 !== 0) throw new RangeError('String length must be even');
  let result;
  array.forEach((element) => {
    if ((element === '(' && array[array.length - 1] === ')') || (element === '[' && array[array.length - 1] === ']') || (element === '{' && array[array.length - 1] === '}')) {
      array.pop();
      result = 'Balanced';
    } else result = 'Unbalanced';
  });

  return result;
}

console.log(findBalanced(input));
