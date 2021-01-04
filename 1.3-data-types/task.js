"use strict"

function calculateTotalMortgage(percent, contribution, amount, date){
    let monthDateNow = new Date().getMonth(); //смотрим месяц даты текущей
    let yearNow = new Date().getFullYear(); //смотрим год даты текущей
    let monthDeadLine = date.getMonth(); //смторим месяц даты окончания кредита по вводу через форму
    let yearDedline = date.getFullYear(); //смотрим год  даты окончания кредита по вводу через форму
    const amountMonth = (+yearDedline - +yearNow) * 12 - (+monthDateNow) + date.getMonth(); //считаем колличество месяцев в кредите
    let percentMonth = +percent / 100 / 12; // считаем процент в месяц
    let credit = +amount - +contribution; // считаем тело кредита
    let payMouth = credit * (percentMonth+percentMonth/(Math.pow((1 + percentMonth), amountMonth)-1)); // считаеем тело кредита+проценты в месяц
    let totalAmount = +payMouth * +amountMonth; // считаем все расходы клиента 
    {console.log (Number(totalAmount.toFixed(2)))}
    return (Number(totalAmount.toFixed(2)))
}

function getGreeting(name) {
    let greeting;
if (name == "") 
    {greeting = ("Привет, мир! Меня зовут Аноним.");
    console.log ("Привет, мир! Меня зовут Аноним.")
}
else if (name == null) 
    {greeting = ("Привет, мир! Меня зовут Аноним.");
    console.log ("Привет, мир! Меня зовут Аноним.")
}
else
    {greeting = (`Привет, мир! Меня зовут ${name}.`);
    console.log (`Привет, мир! Меня зовут ${name}.`)
}
return greeting;
}

