"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    //дискриминант квадратного уравнения
    let D = (b ** 2) - 4 * a * c;
    let x;
    let arr = [];
    let msg = 'Дискриминант меньше нуля, корней нет';
    //если D < 0, то уравнение не имеет действительных корней
    if (D < 0) {
        console.log(msg);
        return msg;
    //если D = 0, то уравнение имеет один действительный корень
    } else if (D == 0) {
        x = -b / 2 * a;
        console.log('x = ' + x);
        return x;
    //если D > 0, то уравнение имеет два действительных корня
    } else if (D > 0) {
        arr[0] = (-b + Math.sqrt(D)) / (2 * a);
        arr[1] = (-b - Math.sqrt(D)) / (2 * a);
        console.log('x1 = ' + arr[0] + ', x2 = ' + arr[1]);
        return arr;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    let today = new Date();
    // вычисляем разницу между текущим годом и годом рождения
    let age = today.getFullYear() - dateOfBirthday.getFullYear();
    let textMsg;
    // > 18
    if (age > 18) {
        textMsg = `Не желаете ли олд-фэшн, ${name}?`;
        console.log(textMsg);
    // < 18
    } else {
        textMsg = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        console.log(textMsg);
    }
    return textMsg;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let result;
    if (marks.length > 5) {
        //если оценок > 5, обрезаем массив
        marks.splice(5);
        aver();
        console.log(`Оценок больше пяти. Средняя оценка, первых 5 оценок: ${result}`);
    } else {
        aver();
        console.log(`Средняя оценка: ${result}`);
    }
    function aver() {
        let sum = 0;
        for (let i = 0; i < marks.length; i += 1) {
            sum += marks[i];
        }
        result = sum / marks.length;
    }
    return result;
}