// Проверьте, что переменная test меньше 10.

let test = Number(prompt('Введите число'));

if (test < 10) {
	console.log(String(test) + ' меньше 10');
} else {
	console.log(String(test) + ' больше или равно 10');
}