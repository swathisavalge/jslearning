//chapter 2 exercise 1

// const mySymbol = "#";


// for (let mycount = 0 ; mycount < 8; mycount++){
//     let newSymbol = "";
//     for (let newct=0; newct < mycount; newct++){
//         newSymbol = newSymbol+mySymbol;
//     }
//     console.log(newSymbol);
// }


/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.*/

// for (let cnt = 1; cnt <=100; cnt++){
//     if(cnt % 3 === 0 && cnt % 5 === 0){
//         console.log("FizzBuzz");
//     }if(cnt % 3 === 0) {
//         console.log("Fizz");
//     } else if(cnt % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(cnt);
//     }
// }

// let printingVal = "";
// let newValue = "";
// let lineCounter = 0;
// for (let grid=1; grid <=8; grid++){
//     if( grid % 2 == 0) {
//         printingVal = ""
//     }
//     for (let lineVal = lineCounter + grid ; lineVal <= 8 * grid; lineVal++){
//         if(lineVal % 2 == 0){
//             newValue = "@";
//         }else {
//             newValue = "#";
//         }
//         printingVal = printingVal + newValue; 
//         lineCounter = lineVal - 1;
//     }
//     console.log(printingVal); 
// }


//difference between let halve = function(n) and function halve(n)
// let n = 10;
// console.log(halve(100));

// function halve(n) {
//     return n / 2;
//  }

// const roads = [
//     "Alice's House-Bob's House",     "Alice's House-Cabin",
//     "Alice's House-Post Office",     "Bob's House-Town Hall",
//     "Daria's House-Ernie's House",   "Daria's House-Town Hall",
//     "Ernie's House-Grete's House",   "Grete's House-Farm",
//     "Grete's House-Shop",            "Marketplace-Farm",
//     "Marketplace-Post Office",       "Marketplace-Shop",
//     "Marketplace-Town Hall",         "Shop-Town Hall"
// ];

// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result);
// }

// function look() {
//   if (promptDirection("Which way?") == "L") {
//     return "a house";
//   } else {
//     return "two angry bears";
//   }
// }

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }

// function buildGraph(edges) {
//     let graph = Object.create(null);
//     function addEdge(from, to) {
//       if (graph[from] == null) {
//         graph[from] = [to];
//       } else {
//         graph[from].push(to);
//       }
//     }
//     for (let [from, to] of edges.map(r => r.split("-"))) {
//       addEdge(from, to);
//       addEdge(to, from);
//     }
//     return graph;
//   }

//   class VillageState {
//     constructor(place, parcels) {
//       this.place = place;
//       this.parcels = parcels;
//     }
  
//     move(destination) {
//       if (!roadGraph[this.place].includes(destination)) {
//         console.log(`No direct path to ${destination}`);
//         return this;
//       } else {
        
//         let parcels = this.parcels.map(p => {
//           if (p.place != this.place) return p;
//           return {place: destination, address: p.address}; 
//         }).filter(p => p.place != p.address);
        
//         return new VillageState(destination, parcels);
//       }
//     }
//   }
  
//   const roadGraph = buildGraph(roads);

//   let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Marketplace"}]
//  );

//  let next = first.move("Marketplace");


// function fn()
// {
//     const twitName = "Hello"
//     const twit = {
//         twitName: 'Proful',
//         a: () => this.twitName
//     }
//     return twit;

// }
// console.log(fn().a());

// function fn() {
//     const twitName = 'abc'
//     const twit = {
//       twitName: 'Proful',
//       a: () => this.twitName
//     }
//     return twit
//   }
//   console.log(fn().a());

function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
      console.log(`value of x is ${x} , num[x] value is ${num[x]} obj value is ${obj[num[x]]}`);
    }
    for (x in obj) {
    console.log(`out has before is ${out}`);
      out.push(x);
      console.log(`out is ${x}`);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 3, 4, 7, 8, 7, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);

