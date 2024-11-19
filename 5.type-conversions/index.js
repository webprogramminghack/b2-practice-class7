'use strict';

// explicit conversion

const str = '123';
const num = Number(str);
// console.log(typeof num);

const str2 = '123Hello';
const num2 = Number(str2);
// console.log(num2);
// console.log(typeof num2);

const str3 = 'hello' / 2;
// console.log(str3);

// number to string
{
  const num = 123;
  const str = String(num);
  // console.log(typeof str);
}

// boolean to string
{
  const bool = true;
  const str = String(true);
  // console.log(str);
  // console.log(typeof str);
}

// string to boolean
{
  const str = 'any string';
  const bool = Boolean(str);
  // console.log(bool);
  // console.log(typeof bool);
}

// implicit conversion

// string and number
// number to string
const result1 = '5' + 2; // append, the result is '52'
// console.log(result1);
// console.log(typeof result1);

const combinedString = 'hello' + ' ' + 'world';
// console.log(combinedString);

// string to number
const result2 = '5' * 2;
// console.log(result2);

const newResult2 = '5' - 2;
// console.log(newResult2);

// boolean
const result3 = true + 1;
// console.log(result3);

const result4 = false + 1;
// console.log(result4);

// undefined an null
const result5 = undefined + 1;
// console.log(result5);

const result6 = null + 1;
// console.log(result6);

// Comparison non-strict equality (==)
console.log(5 == '5');
console.log(0 == false);
console.log(null == undefined);

// Comparison strict equality (===)
console.log(5 === '5');
console.log(0 === false);
console.log(null === undefined);
