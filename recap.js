function moonUp(time) {
    if(time > 5 && time < 19){
        return true;
    }
    return false;
}

var moonStatus = moonUp(20);
console.log(moonStatus);
