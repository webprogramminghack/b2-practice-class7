'use strict';

{
  // while (true) {
  //   // kode
  // }

  let i = 0;
  while (i <= 3) {
    // console.log(i);
    i++;
  }
}

{
  let i = 3;
  while (i) {
    // console.log(i);
    i--;
  }
}

{
  let i = 0;
  // while (i < 3) console.log(i++);
}

{
  let i = 6;
  while (i <= 5) {
    // console.log(i);
    i++;
  }

  let j = 100;
  // do it once regardless the condition
  do {
    // console.log(j);
    j++;
  } while (j <= 5);
}

for (let i = 0; i < 3; i++) {
  // console.log(i);
}

let sum = 0;

// while (sum < 100) {
// if (sum === 5) break;
// console.log(sum);

// sum++;
// if (sum % 2 === 0) continue;
// console.log(sum);
// }

// for (let i = 0; i < 100; i++) {
// if (i === 10) break;
// console.log(i);
// }

// for (let x = 1; x <= 5; x++) {
// let combined = '';
// for (let y = 1; y <= x; y++) {
// combined += y;
// }
// console.log(combined);
// }

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == 1 && j == 1) break outer;

    console.log(`Value at coords (${i}, ${j})`);
  }
}

console.log('Done!');
