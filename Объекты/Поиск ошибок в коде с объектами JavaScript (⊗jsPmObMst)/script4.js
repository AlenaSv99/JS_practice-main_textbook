// Код должен вывести количество элементов объекта:

/*
let obj = {x: 1, y: 2, z: 3};
console.log(obj.length); // выведет undefined, т.к. у объекта нет свойства length
*/

let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length); // выведет 3, т.к. получен массив ключей объекта