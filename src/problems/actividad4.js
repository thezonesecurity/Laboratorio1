/*
1.- Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number.
*/
// 42145 -> 54421
const orders = (nro) => {
  if (nro > 0) {
    let arr =nro.toString();
    return Object.values(arr).sort((a, b) => b - a );
  }
  return "El numero es negativo";
}
/*
Complete the findNextSquare method that finds the next integral perfect square after the one
 passed as a parameter. Recall that an integral perfect square is an integer n such 
 that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume 
the parameter is non-negative.
*/
const findNextSquare = (num) => {
  let n = Math.sqrt(num);
  if (n % 1 === 0) {
    let i = 1;
    while (true) {
      let data = num + i;
      let nro = Math.sqrt(data);
      if(nro % 1 === 0) {
        return `the next perfect square is: ${data}`
      }
      i++;
    }
  }
  return `-1 since ${num} is not a perfect square`
}

const Number = () => {
  console.log("desafio 1");
    console.log(orders(42145));
    console.log("desafio 2");
    console.log(findNextSquare(121))

}
export default Number;
