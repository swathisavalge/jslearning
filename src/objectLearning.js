// create a global _wmt
// add some random methods
// should be able to call those methods from the console.
// for example _wmt.printHello() // prints hello
// _wmt.ccm.home.getValues() // object with values for home
// _wmt.ccm['search'].getValues() // object with values for search


// const _wmt = {
//     sayHello() {
//         console.log("Hello Everyone");
//     },
//     getValue(myobj){
//         console.log(`My Value for getValue is ${myobj.value}`);
//     },
//     ccm: {
//         home: {
//             value : "myvalue1"
//         },
//         search: {
//             value : "myvalue2"
//         }
//     }
// }

// _wmt.sayHello();

// //_wmt.ccm.home.getValue();

// _wmt.getValue(_wmt.ccm.search);

// let ipl = [1, 2, 3, 4];
// let cpl = ipl.map(x => x * 2)
//              .filter(x => x > 3)
//              .reduce((x, y) => x + y);

             
// console.log(cpl);
// console.log(ipl);

//new exercise
// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// //solution

// const is_array=(myarray) => {
//     return (Array.isArray(myarray));
//   }
  
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

//solution

// const cloningArray=(myArray)=>{
//     return myArray.slice(0);
// }

// console.log(cloningArray([1, 2, 4, 0]));
// console.log(cloningArray([1, 2, [4, 0]]));

// 5. Write a simple JavaScript program to join all elements of the following array into a string
// myColor = ["Red", "Green", "White", "Black"];

//Solution
// const joining=(myArray)=>{

//         return myArray.join();
// }

// myColor = ["Red", "Green", "White", "Black"];
// console.log(joining(myColor));

//3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// const first=(myArray,n) => {
//     if(myArray == null) 
//       return myArray;
//     if(n == null) 
//       return myArray[0];
//     if(n<0) 
//       return [];
//     return myArray.slice(0,n);
//   }
  
//   console.log(first([7, 9, 0, -2]));
//   console.log(first([],3));
//   console.log(first([7, 9, 0, -2],3));
//   console.log(first([7, 9, 0, -2],6));
//   console.log(first([7, 9, 0, -2],-3));

//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// const last=(myArray,n) => {
//     let arrLen = myArray.length;
//     console.log(arrLen + " and n value is " + n );
//     if(myArray == null) 
//       return myArray;
//     if(n == null)
//         return myArray[arrLen-1];
//     return myArray.slice(Math.max(arrLen-n, 0));
//   }
  
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2],3));
//   console.log(last([7, 9, 0, -2],6));

  //Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

    //   let myNum = prompt("Enter a number");
    //   console.log("My number is " + myNum);