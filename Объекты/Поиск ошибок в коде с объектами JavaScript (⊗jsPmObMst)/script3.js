// Код должен вывести сумму элементов объекта:

/*
let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];

console.log(obj); // выведет ошибку (x is not defined)
*/

let obj = {x: 1, y: 2, z: 3};
let sum = obj['x'] + obj['y'] + obj['z'];

console.log(sum); // выведет 6