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