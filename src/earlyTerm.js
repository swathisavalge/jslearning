// let myArr = { 'id': "123" , 'name': 'walmart'};
// //1. create List using items
// let newArr = [{'id': "1234" , 'name': 'walmart3'},{'id': "456" , 'name': 'walmart1'},{'id': "123" , 'name': 'walmart'},{'id': "789" , 'name': 'walmart2'}];
// // Sort based on id
// let specificArr = newArr.filter(item => (item.id === "456"));
// console.log(specificArr);

////2. create dyanamic array of objects using items and id = index and name ={walmart}
 //let newArr = [{'id': "1234" , 'name': 'walmart3'},{'id': "456" , 'name': 'walmart1'},{'id': "123" , 'name': 'walmart'},{'id': "789" , 'name': 'walmart2'}];

// const createMyArray = (len) => {
//     let newArr = [];
//     for(i=0; i<=len-1; i++){
//         newArr = newArr.concat({'id':Math.random(), 'name': `walmart${i}`});
//     }
//     console.log(newArr);
// };

// createMyArray(4);

//sort array by id
let newArr = [{'id': "1234" , 'name': 'walmart3'},{'id': "456" , 'name': 'walmart1'},{'id': "123" , 'name': 'walmart'},{'id': "789" , 'name': 'walmart2'}];

const justID = (newArr) => {
    let idArr = [];
    for(i=0; i<=(newArr.length)-1; i++){
        idArr = idArr.concat(newArr[i].id);
    }
    let finalArr = idArr.sort((a,b)=> a-b);
    return(finalArr);
};

console.log(justID(newArr));
