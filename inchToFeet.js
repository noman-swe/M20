function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var myFeet = inchToFeet(24);
console.log(myFeet);

// mile to km
function mileToKm(mile){
    var km = mile*1.60934;
    return km;
}

var totalKm = mileToKm(3);
console.log(totalKm);