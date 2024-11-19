'use strict';

{
  const age = 18;

  if (age >= 18) {
    // console.log('You are an adult');
  }

  if (1) {
    // console.log('runs');
  }

  if (0) {
    // console.log(`Doesn't run`);
  }

  if ('hello') {
    // console.log('runs');
  }

  if ('') {
    // console.log(`Doesn't run`);
  }

  if (null) {
    // console.log(`Doesn't run`);
  }

  if (undefined) {
    // console.log(`Doesn't run`);
  }

  if (NaN) {
    // console.log(`Doesn't run`);
  }
}

// if (false) {
// kode yang akan dijalankan jika kondisi benar
// } else {
// kode yang akan dijalankan jika kondisi salah
// }
{
  const age = 16;

  if (age >= 18) {
    // console.log('You are an adult');
  } else {
    // console.log('You are a minor');
  }
}

// if (false) {
// kode yang akan dijalankan jika kondisi 1 benar
// } else if (false) {
// kode yang akan dijalankan jika kondisi 2 benar
// } else if (false) {
// kode yang akan dijalankan jika kondisi 3 benar
// } else {
// kode yang akan dijalankan jika semua yang diatasnya salah
// }

{
  const age = 20;

  if (age < 13) {
    // console.log('You are a child');
  } else if (age >= 13 && age <= 20) {
    // console.log('You are a teenager');
  } else {
    // console.log('You are an adult');
  }
}

{
  // kondisi ? ekspresi1 : ekspresi2;

  const age = 18;
  const message = age >= 18 ? 'You are an adult' : 'You are a minor';
  // console.log('message :>> ', message);

  // let message2;
  // if (age >= 18) {
  //   message2 = 'You are an adult';
  // } else {
  //   message2 = 'You are a minor';
  // }

  // console.log('message2 :>> ', message2);
}

{
  // kondisi1 || kondisi2;
  const result = true || false;
  // console.log('result :>> ', result);

  const isWeekend = true;
  const isHoliday = false;

  if (isWeekend || isHoliday) {
    // console.log('You can relax today');
  } else {
    // console.log('You have to work today');
  }

  // kondisi1 && kondisi2;
  const result2 = true && false;
  // console.log('result2 :>> ', result2);

  const age = 25;
  const hasID = false;
  const mature = false;
  const married = true;

  if ((age >= 18 && (hasID || married)) || mature) {
    console.log('You are allowed to enter');
  } else {
    console.log('You are not allowed to enter');
  }
}
