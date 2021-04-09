let myArray = [1,2,3,4,5];
let lnSet = new Set(myArray);

let myVal = [6,7,8];
lnSet = [lnSet, new Set(myVal)];
console.log(lnSet);