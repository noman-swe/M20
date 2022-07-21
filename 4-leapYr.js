function leapYrCheck(year){
    if(year %4 != 0){
        return false;
    }
    else{
        return true;
    }
}
const leapYr = leapYrCheck(2012);
console.log(leapYr);

const myYr = leapYrCheck(2021);
console.log(myYr);

// 
// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = checkLeapYear(2100);

console.log(year);