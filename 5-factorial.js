var factorial = 1;
for(var i = 1; i <= 7; i++){
    // console.log(i);
    factorial = factorial * i;
}
console.log(factorial);

// factorial with functions
function factorialFunc(number){
    let factor = 1;
    for(let i = 1; i <= number; i++){
        factor = factor * i;
    }
    return factor;
}

const factorialCheck = factorialFunc(7);
console.log(factorialCheck);

// factorial using while loop and decrimenting
function getFactorial (number){
    let facto = 1;
    let i = number;
    while(i >= 1){
        facto =  i * facto;
        i--;
    }
    return facto;
}

const factorialGet = getFactorial(7);
console.log(factorialGet);