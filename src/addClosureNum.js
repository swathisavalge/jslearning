const addNumber = (num) => {
    return result => result + num;
}

let total = addNumber(5);

console.log(total(9));