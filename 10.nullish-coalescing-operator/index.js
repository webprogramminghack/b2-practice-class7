'use strict';

{
  let user;

  // console.log(0 ?? 'Anonymous');

  // console.log(0 || 'Anonymous'); // tidak direkomendasikan
}

// let a = 0;
// let result = a ? a : 'Anonymous';
// console.log('result :>> ', result);

{
  let firstName = null;
  let lastName = null;
  let nickName = 'Supercoder';

  // console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');
}

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
console.log('area :>> ', area);
