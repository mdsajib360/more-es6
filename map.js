const numbers = [4, 6, 8, 10];
const output2 = [];

function doubleOld (number){
    return number * 2;
}

const doubleIt = number => number * 2;


for (const number of numbers) {
    // const result = number * 2;
    const result = doubleIt(number);
    output2.push(result);
}
//1. loop through each element
//2. for eac element call the provided function 
//3. result for each element will be stored in an array

// const output = numbers.map(doubleIt); //or,
const output3 = numbers.map(x => x * 2);
console.log(output3);


const squares = numbers.map(x => x * x);
console.log(squares);