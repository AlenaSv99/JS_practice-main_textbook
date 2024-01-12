// Код должен вывести последнюю цифру числа:

/*
let num = 123;
let str = String(num);
console.log(str[str.length]); // выведет undefined
*/

let num = 123;
let str = String(num);
console.log(str[str.length - 1]); // выведет '3'