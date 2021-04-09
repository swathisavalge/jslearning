const myItems=[{"id": "1", "name": "Walmart"}, {"id": "2", "name": "Walmart11"}, {"id": "3", "name": "Walmart123"}]
//1. A page which shows a list using above items
//console.log(Array.from(myItems)); 
//2. Add a button below the list called Change Name, when user clicks, all list text changes to Glass Homepage
// const items1=[{"id": "1", "name": "Walmart"},
//  {"id": "1", "name": "Walmart11"},
//  {"id": "3", "name": "Walmart123"},
//  {"id": "3", "name": "Walmart123"},
//  {"id": "4", "name": "Walmart123"}]
//3. Add a button at the top right of the page (CSS knowledge is optional) called Remove Duplicates. When user clicks it all 5 items should switch to 3 items since 2 are with duplicate ID
//4. Old Excercised during evaluation which was filter by an ID,
//5. create List using items,
//6. create dyanamic array of objects using items and id = index and name ={walmart}
//7. Sort based on id


const items1=[{"id": "1", "name": "Walmart"}, {"id": "1", "name": "Walmart11"}, {"id": "3", "name": "Walmart123"}, {"id": "3", "name": "Walmart123"}, {"id": "4", "name": "Walmart123"}];


// function deleteDup(data, key) {
//     return [ 
//        ...new Map(
//           data.map(x=>[key(x),x])
//       ).values()
//     ]
// }

// function getUnique(){
//   document.getElementById("arrayVal").innerHTML = JSON.stringify(deleteDup(items1, ar => ar.id));
// }

const uniqueArray = items1.filter((items1, index) => {
  const _thing = JSON.stringify(items1);
  return index === items1.findIndex(obj => {
    return JSON.stringify(obj) === _thing;
  });
});

console.log(uniqueArray);