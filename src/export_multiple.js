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

var stringToNumber = function(str){
  return Number(str);//parseInt
}

function addBinary(a,b) {
  return (a + b).toString(2)
}

function highAndLow(numbers){
  var numberArr = numbers.split(" ").map(Number)
  var maxNumber = Math.max.apply(null, numberArr)
  // var maxNumber = Math.max(...numberArr)
  var minNumber = Math.min.apply(null, numberArr)
  // var minNumber = Math.min(...numberArr)
  

  return `${maxNumber} ${minNumber}`;
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
  highAndLow
}