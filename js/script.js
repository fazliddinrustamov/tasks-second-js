// 1st task

let convertHelper = -1;

let convertToNegative = function (num) {
  if (num > 0) {
    return console.log(num * convertHelper);
  } else {
    return console.log(num);
  }
};

convertToNegative(3);

// 2nd task

let sheepValue = "sheep";

let sheepForSleep = function (wishNum) {
  if (wishNum < 1) {
    alert("Enter positive numbers!")
  };

  let result = "";

  for (i = 1; i <= wishNum; i++) {
    result += `${i} ${sheepValue}... `
  };

  return console.log(result);
};

sheepForSleep(19);

// 3rd task

let needNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -11, -12, -13, -14, -15, -178];

let calculator = function (value) {
  if (value === null) {
    return [];
  } else if (value.length === 0) {
    return [];
  };

  let positive = 0;
  let negative = 0;

  for ( i = 0; i < value.length; i++ ) {
    if (value[i] > 0) {
      positive++;
    } else if (value[i] < 0) {
      negative = negative + value[i];
    }
  };

  return [positive, negative];
};

console.log(calculator(needNums));

// 5th task

let isogramChecker = function (value) {
  let caseFixer = value.toLowerCase();

  for ( i = 0; i < caseFixer.length; i++ ) {
    let valueSlicer = caseFixer.slice(i + 1);

    if (valueSlicer.includes(caseFixer[i])) {
      return false;
    }
  }

  return true;
};

console.log(isogramChecker("Fox"));