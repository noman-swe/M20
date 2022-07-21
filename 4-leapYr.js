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