for(let i = 1; i <20; i++){
    if(i % 2 != 0){
        continue;
    }else{
        console.log(i, 'is even number.')
    }
}

// even by using function
function oddOrEven(number){
    if(number%2 == 0){
        return (number, 'is a even number.');
    }else{
        return (number, 'is a odd number.')
    }
}

var checkEvenOrOdd = oddOrEven(10);
console.log(checkEvenOrOdd);