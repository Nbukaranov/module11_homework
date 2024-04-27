let newArr = [undefined, 0, 1, 2];


function typeDefinitionNumber() {
  
  
let evenNumb = 0;
let oddNumb = 0;
let notNumb = 0;
let nullNumb = 0;
  
for (let i = 0; i < newArr.length; i++) { 

    if (newArr[i] % 2 !== 0 && typeof newArr[i] !== "string" && typeof newArr[i] !== "boolean" && typeof newArr[i] !== "undefined") {
        oddNumb += 1;
    } else if (newArr[i] % 2 === 0 && typeof newArr[i] !== "string" && typeof newArr[i] !== "boolean" && newArr[i] !== 0 && typeof newArr[i] !== "object") {
      evenNumb +=1;
    } else if (newArr[i] === 0) {
     nullNumb +=1;
    }else {
      notNumb +=1;
    }
 
}
 
 console.log("Не числа: " + notNumb);
 console.log("Количество чётных: " + evenNumb);
 console.log("Количество нечётных: " + oddNumb);
 console.log("Количество нулевых: " + nullNumb);
};


typeDefinitionNumber();