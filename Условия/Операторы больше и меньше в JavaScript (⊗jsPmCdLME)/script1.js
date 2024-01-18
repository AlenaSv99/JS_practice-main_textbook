// Проверьте, что переменная test больше 10.

let test = Number(prompt('Введите число'));

if (test > 10) {
	console.log(String(test) + ' больше 10'); 
} else {
	console.log(String(test) + ' меньше или равно 10');
}