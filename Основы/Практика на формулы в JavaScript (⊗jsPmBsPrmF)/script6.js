// Пусть дана переменная tf с температурой в градусах Фаренгейта. 
// По соответствующей формуле выполните перевод этой температуры в градусы Цельсия.

let tf = prompt('Введите температуру в градусах Фаренгейта');
let tc = (Number(tf) - 32) / 1.8;
alert('Температура в градусах Цельсия = ' + tc.toFixed(2));