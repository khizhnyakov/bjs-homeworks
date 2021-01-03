"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {

    let monthDateNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();
    let monthDeadLine = date.getMonth();
    let yearDedline = date.getFullYear();
    const amountMonth = (+yearDedline - +yearNow) * 12 - (+monthDateNow) + date.getMonth();
    let percentMonth = +percent / 100 / 12;
    let credit = +amount - +contribution;
    let payMouth = credit * (percentMonth+percentMonth/(Math.pow((1 + percentMonth), amountMonth)-1));
    let totalAmount = +payMouth * +amountMonth + +credit;
    {console.log (`Всего с процентами: ${totalAmount.toFixed(2)} рублей`)}
    return (`Всего с процентами: ${totalAmount.toFixed(2)} рублей`)
}



function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}




