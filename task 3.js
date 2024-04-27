
/*Задание 3

Напишите функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел.
 Выведите в консоль результат. */


function firstNumber(x) {
  
    return function secondNumber(y) {
       return x+y
    }
    
  }
  
  
  let SumNumber = firstNumber(5);
  console.log(SumNumber(7));
