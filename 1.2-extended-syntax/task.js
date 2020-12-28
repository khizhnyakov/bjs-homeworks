"use strict"

function getResult(a,b,c){
    let x =[];
    let d =(b**2-4*a*c);
    if (d===0) {
    x[0] = -b/2*a;
    }
    else if (d<0) {
    }
    else {
        x[0]=(- b + Math.sqrt(d)) / (2 * a);
        x[1]=(- b - Math.sqrt(d)) / (2 * a); 
    }
    return x;
}
//! доделать
function getAverageMark(marks){
    if (marks.length === 0) {
        return 0;
    }
    else if (marks.length > 0){
        if (marks.length > 5){
        //console.log ("более 5 оценок");
        marks.splice(5);
        }
    let summ = 0;
    /*summ = marks.reduce(function(sum, elem){
        return sum + elem;
    }, 0);*/
    for (let i = 0; i < marks.length; i++){
        summ += marks[i];
    }
    return (summ/marks.length);
    }
}




//todo function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;

