function primeNumber(num) {
    if ((num < 2) || (num > 1000)) {
        return 'Данное число вне диапазона. Повторите попытку';
    } else {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0 && num !== 2) {
             
                return 'Составное число';
            } else  {
              for (let i = 3; i < num; i++) {
            if (num % i === 0) {
              return 'Составное число';
            }
              } 
              return 'Простое число';
            }
          }   
    }
}

console.log(primeNumber(21));


// если делать без проверки на 3, то в состав простых чисел будет попадать 21 и т.п., но оно является составным