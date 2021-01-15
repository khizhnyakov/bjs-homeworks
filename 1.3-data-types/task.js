"use strict"

function calculateTotalMortgage(percent, contribution, amount, date){
    const amountMonth = (date.getFullYear() - new Date().getFullYear()) * 12 - (+new Date().getMonth()) + date.getMonth(); //считаем колличество месяцев в кредите
    let percentMonth = +percent / 100 / 12; // считаем процент в месяц
    let payMouth = (+amount - +contribution) * (percentMonth+percentMonth/(Math.pow((1 + percentMonth), amountMonth)-1)); // считаеем тело кредита+проценты в месяц
    let totalAmount = +payMouth * +amountMonth; // считаем все расходы клиента 
    {console.log (Number(totalAmount.toFixed(2)))}
    return (Number(totalAmount.toFixed(2)))
}

function getGreeting(name) {
    let greeting;
    if (name == "") {
        greeting = ("Привет, мир! Меня зовут Аноним.");
        console.log("Привет, мир! Меня зовут Аноним.")
    }
    else if (name == null) {
        greeting = ("Привет, мир! Меня зовут Аноним.");
        console.log("Привет, мир! Меня зовут Аноним.")
    }
    else {
        greeting = (`Привет, мир! Меня зовут ${name}.`);
        console.log(`Привет, мир! Меня зовут ${name}.`)
    }
    return greeting;
}


