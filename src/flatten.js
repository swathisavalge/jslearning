function flatten(arr) {
    debugger;
    let newArr = [];
    arr.forEach((i) => {
        if(!Array.isArray(i)){
            newArr.push(i);
        }
        else flatten(i);
    })
    return newArr;
}
let arr = [1, [2, 3, [4, 5],[6,7,8]],[9,0]];
//let newArr = [];
console.log(flatten(arr));


// function flatten(arr) {

//     let newArr = [];
//     arr.forEach((item, index) => {
//       let tempArray = [];
//         if(!Array.isArray(item)){
//           tempArray.push(item);
//         }
//         else {
//           let tempArray2 = flatten(item);
//           tempArray += tempArray.push(tempArray2);
//           console.log("My Temp Array " + tempArray);
          
//         } 
//       if(tempArray.length != 0){
//         newArr.push(tempArray);
        
//         console.log(newArr);
//       }
//     })
//     return newArr;
// }
// let arr = [1, [2, 3, [4, 5]]];
// console.log(flatten(arr));