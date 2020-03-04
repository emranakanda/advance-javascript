const numbers = [3, 4, 5, 6];
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// function square(element){
//     return element * element;
// }

// const result = element => element * element; //Arrow Function

const result = numbers.map(element => element * element);

const bigger = numbers.filter(element => element > 5);

console.log(result);
console.log(bigger);