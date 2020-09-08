//1. Написать функцию, которая будет принимать число и возвращать массив с числами от`0` до`N-1`.

function func1(n) {
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(i);
    return arr;
}

let n = prompt("First task. Input number", 5);
console.log('First task');
console.log(func1(n));

//2. Создать функцию которая будет принимать 3 числа и проверять - делится ли нацело первое число
// одновременно и на второе и на третье.
function func2(num1, num2, num3) {
    if (num1 % num2 == 0 && num1 % num3 == 0)
        return true;
    else
        return false;
}

let num1 = prompt("Second task. Input 1 of 3 numbers", 50);
let num2 = prompt("Input 2 of 3 numbers", 5);
let num3 = prompt("Input 3 of 3 numbers", 10);

console.log('Second task');
console.log(func2(num1, num2, num3));

//3. Написать функцию которая будет принимать строку и  возвращать туже строку но с капитализированной
//первой буквой.Покрывать случаи со спецсимволами не нужно.Строка всегда содержит от 1 до 10 символов.
function func3(str) {
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

let str = prompt("Third task. Input string", "hello");

console.log('Third task');
console.log(func3(str));
