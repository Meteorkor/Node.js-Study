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


module.exports = {
  greet,
  getSum,
  oddOrEven
}