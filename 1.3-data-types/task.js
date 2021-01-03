"use strict"

function calculateTotalMortgage(percent, contribution, amount, date){
    let monthDateNow = new Date().getMonth(); //смторим месяц даты текущей
    let yearNow = new Date().getFullYear(); //смторим год даты текущей
    let monthDeadLine = date.getMonth(); //смторим месяц даты окончания кредита по вводу через форму
    let yearDedline = date.getFullYear(); //смторим год  даты окончания кредита по вводу через форму
    const amountMonth = (+yearDedline - +yearNow) * 12 - (+monthDateNow) + date.getMonth(); //считаем колличество месяцев в кредите
    let percentMonth = +percent / 100 / 12; // считаем процент в месяц
    let credit = +amount - +contribution; // считаем тело кредита
    let payMouth = credit * (percentMonth+percentMonth/(Math.pow((1 + percentMonth), amountMonth)-1)); // считаеем процент за время кредита 
    let totalAmount = +payMouth * +amountMonth + +credit; // считаем все расходы клиента 
    {console.log (`Всего с процентами: ${totalAmount.toFixed(2)} рублей`)}
    return (`Всего с процентами: ${totalAmount.toFixed(2)} рублей`)
}


function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}




