// TASK 1
"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let S = amount - contribution;
  let today = new Date();
  let term = new Date(date);
  let msPerDay = 24 * 60 * 60 * 1000;
  let n = parseInt(((term - today) / msPerDay) / 30);
  console.log(n);
  let P = percent / 100 / 12;
  let payment = S * (P + P / (((1 + P) ** n) - 1));
  console.log(payment);
  let totalAmount = payment * n;
  console.log(totalAmount);
  return totalAmount.toFixed(2);
}

// TASK 2
function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let user;
    if (name === 'null' || name === 'undefined' || name === "" || name === " ") {
      user = 'Аноним';
    } else {
      user = name;
    }
    return `Привет, мир! Меня зовут ${user}`;
}