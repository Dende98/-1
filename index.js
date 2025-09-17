

// function factorialIt(numb) {
//   let result = 1;
//    if (numb < 0) throw new Error('Введите число больше нуля');
//   for (let i = 1; i <= numb; i++) {
   
//     result *= i;
//   }
//   return result;
// }
// console.log(factorialIt(5));

// рекрусия//

function rec(numb) {
  if (numb === 1 || numb === 0) return 1; if (numb < 0) throw new Error('Введите число больше нуля');
  return numb * rec(numb - 1);
}
console.log(rec(200));


module.exports = { factorialIt, rec };