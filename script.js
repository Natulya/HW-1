'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData.budget);

let qW1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    qH1 = prompt("Во сколько обойдется?", ''),
    qW2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    qH2 = prompt("Во сколько обойдется?", '');

appData.expenses.qW1 = qH1;
appData.expenses.qW2 = qH2;

console.log(appData.expenses.qW1);
console.log(appData.expenses.qW2);

alert(appData.budget / 30);