const Employees = [
    {id: 31, name: "Suman Ali"},
    {id: 35, name: "Salman Lucchu"},
    {id: 45, name: "Rubel Mahmud"},
    {id: 41, name: "Israil Ahmed"}
];

// for(let i = 0; i < Employees.length; i++){
//     const element = Employees[i];
//     const result = element;
//     console.log(result.name);
// }

const result2 = Employees.map(element => element.name);
const bigger = Employees.filter(element => element.id > 40);
const biggerOne = Employees.find(element => element.id > 40);

console.log(biggerOne);
console.log(bigger);
// console.log(result2);
