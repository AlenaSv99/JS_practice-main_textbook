// Даны переменные test1 и test2. 
// Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.

let test1 = Number(prompt('Введите значение 1'));
let test2 = Number(prompt('Введите значение 2'));

if (test1 > test2) {
	console.log(String(test1) + ' больше, чем ' + String(test2)); 
} else {
	console.log(String(test2) + ' больше, чем ' + String(test1));
}