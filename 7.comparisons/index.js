'use strict';

{
  const result = 5 == '5';
  // console.log(result);
}

{
  const result = 5 !== '5';
  // console.log(result);
}

{
  const result = 10 > 5; // true
}

{
  const result = 10 < 5; // false
}

{
  const result = 10 >= 10; // true
}

{
  const result = 10 <= 10; // true
}

{
  const result1 = 'apple' > 'banana';
  const result2 = 'apple' < 'banana';
  // console.log('result1 :>> ', result1);
  // console.log('result2 :>> ', result2);
}

{
  const result1 = null == undefined; // true
  const result2 = null === undefined; // false

  const result3 = null > 0; // false
  const result4 = null == 0;
  // console.log('result4 :>> ', result4);

  const result6 = undefined > 0; // false
  const result7 = undefined < 0; // false
  const result8 = undefined == 0; // false

  // console.log('result6 :>> ', result6);
  // console.log('result7 :>> ', result7);
  // console.log('result8 :>> ', result8);
}

{
  const result1 = true == 1;
  const result2 = false == 0;
  const result3 = true === 1;
  const result4 = false === 0;

  // console.log('result1 :>> ', result1);
  // console.log('result2 :>> ', result2);
  // console.log('result3 :>> ', result3);
  // console.log('result4 :>> ', result4);
}
