'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
    "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
};
console.log(appData.budget);

let questionWhat1 = prompt("Введите обязательную статью расходов в этом месяце");
let questionWhat2 = prompt("Введите обязательную статью расходов в этом месяце");
let questionHowMuch1 = prompt("Во сколько обойдется?");
let questionHowMuch2 = prompt("Во сколько обойдется?");