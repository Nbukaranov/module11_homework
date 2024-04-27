/* Задача 4


Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить числа в интервале от первого 
до второго принятого числа. Используйте setInterval. */




function num(a, b) {
    let v = a;
    const time = setInterval(function() { 
         console.log(v);
          v++;
      if (v > b) {
          clearInterval(time);
        }
        }, 1000);
        
      
    }
    
    num(1, 15);