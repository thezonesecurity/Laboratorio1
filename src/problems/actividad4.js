/*
1.- Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number.

 Tu tarea es hacer una función que pueda tomar cualquier entero no negativo
  como argumento y devolverlo con sus dígitos en orden descendente.
   Básicamente, reorganice los dígitos para crear el número más alto posible
*/
// 42145 -> 54421
const orders = (nro) => {
  if (nro > 0) {
    let arr =nro.toString();
    return Object.values(arr).sort((a, b) => b - a );
  }
  return "El numero es negativo";
}

const Number = () => {
    console.log(orders(42145))
}
export default Number;
