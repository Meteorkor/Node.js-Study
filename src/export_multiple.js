//const greet = name => `Hello, ${name} how are you doing today?`;
function greet(name) {
  return `Hello, ${name} how are you doing today?`
}

function getSum(a, b) {
  console.log(a, b)
  if (a >= b) {
    temp = b;
    b = a;
    a = temp;
  }
  var sum = 0;
  for (var num = a; num <= b; num++) {
    sum += num;
  }
  return sum;
}

/* 
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
*/

function oddOrEven(array) {
  var sum = 0;
  array.forEach((item, index, array) => {
    sum += item;
  });

  return sum % 2 == 0 ? "even" : "odd";
}

// function oddOrEven(arr) {
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }
function getCount(str) {
  var vowelsCount = 0;

  var vowrls = ['a', 'e', 'i', 'o', 'u'];

  `${str}`.split('').forEach((item) => {
    vowrls.filter((value) => {
      vowelsCount += (item == value) ? 1 : 0;
    });
  });
  return vowelsCount;
}
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

function validatePIN(pin) {
  var matchedCnt = (pin.match(/[0-9]/ig) || []).length;
  if (pin.length != matchedCnt) {
    return false;
  }

  return matchedCnt == 4 || matchedCnt == 6;
  //return true or false
}
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
// var hasOnlyNumbers = pin.match(/^\d+$/);

function sumStr(a, b) {
  return `${Number(a) + Number(b)}`
}
// function sumStr(a,b) {
//   return String(Number(a)+Number(b));
// }
// function sumStr(a,b) {
//   return (+a+ +b)+''  
// }

var stringToNumber = function (str) {
  return Number(str);//parseInt
}

function addBinary(a, b) {
  return (a + b).toString(2)
}

function highAndLow(numbers) {
  var numberArr = numbers.split(" ").map(Number)
  var maxNumber = Math.max.apply(null, numberArr)
  // var maxNumber = Math.max(...numberArr)
  var minNumber = Math.min.apply(null, numberArr)
  // var minNumber = Math.min(...numberArr)


  return `${maxNumber} ${minNumber}`;
}

function findNb(m) {
  var max = 10000000;
  var sum = 0;
  for (let i = 1; i < max; i++) {
    // sum += i * i * i;
    sum += Math.pow(i, 3);
    if (m < sum) {
      return -1;
    } else if (m == sum) {
      return i;
    }
  }
  return (-1);
}

// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }

var busStopNumber = function (busStops) {
  // var remainNumber = 0;
  // busStops.forEach((item, index, array) => {
  //   remainNumber += item[0];
  //   remainNumber -= item[1];
  // })
  // return remainNumber;

  return busStops.reduce((s, n) => s + n[0] - n[1], 0);
}

function squareSum(numbers) {
  return numbers.reduce((s, n) => s + Math.pow(n, 2), 0);
}

function seriesSum(n) {
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
}

function opposite(number) {
  return -(number)
}

function friend(friends) {
  return friends.filter(word => word.length == 4);
}

function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

function expandedForm(num) {
  var numText = num + '';
  var result = "";

  for (let i = 0; i < numText.length; i++) {
    if (numText.charAt(i) != '0') {
      if (i != 0) {
        result += ' + ';
      }
      result += numText.charAt(i);
      result += "0".repeat(numText.length - i - 1);
    }
  }

  return result;
  // return String(num)
  // .split("")
  // .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
  // .filter((num) => Number(num) != 0)
  // .join(" + ")
}

function reverseWords(str) {
  return str.split(" ").map((tex) => tex.split("").reverse().join("")).join(" ");
}

module.exports = {
  greet,
  getSum,
  oddOrEven,
  getCount,
  validatePIN,
  sumStr,
  stringToNumber,
  addBinary,
  highAndLow,
  findNb,
  busStopNumber,
  squareSum,
  seriesSum,
  opposite,
  friend,
  past,
  expandedForm,
  reverseWords
}