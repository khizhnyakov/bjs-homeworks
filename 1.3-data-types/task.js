function calculateTotalMortgage(percent, contribution, amount, date) {

    let monthDateNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();
    let monthDeadLine = date.getMonth();
    let yearDedline = date.getFullYear();
    const amountMonth = (+yearDedline - +yearNow) * 12 - (+monthDateNow) + date.getMonth();
    let percentMonth = +percent / 12;
    let credit = +amount - +contribution;
    let payMouth = (+credit * percentMonth)/ Math.pow((1 -(1 + percentMonth)), -36);
    let totalAmount = +payMouth * +amountMonth + +credit;
    return totalAmount.toFixed(2) ;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}




