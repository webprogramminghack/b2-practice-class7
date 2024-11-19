'use strict';

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

if (1 || 0) {
  // console.log('runs');
}

{
  let hour = 9;

  if (hour < 10 || hour > 18) {
    // console.log('The office is closed');
  }
}

{
  let hour = 12;
  let isWeekend = true;

  if (hour < 10 || hour > 18 || isWeekend) {
    // console.log('The office is closed');
  }
}

// console.log(0 || '' || 100 || 'hello');
// console.log(undefined || null || 0);

// true || console.log('not printed');
// false || console.log('printed');

// 'hello' || console.log('not printed');
// '' || console.log('printed');

// console.log(true && false && true);
// console.log(100 && 'hello' && 0 && 'hi');

// console.log(!true);
// console.log(!0);

console.log(!!'non empty string');
console.log(!!null);
