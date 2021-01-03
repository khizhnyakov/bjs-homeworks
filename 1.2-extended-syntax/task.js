"use strict"

function getResult(a,b,c){
    let x =[];
    let d =(b**2-4*a*c);
    if (d===0) {
    x[0] = -b/2*a;
    }
    else if{
        x[0]=(- b + Math.sqrt(d)) / (2 * a);
        x[1]=(- b - Math.sqrt(d)) / (2 * a); 
    }
    return x;
}

function getAverageMark(marks){
    if (marks.length === 0) {
        return 0;
    }
    else if (marks.length > 0){
        if (marks.length > 5){
        marks.splice(5);
        }
    let summ = 0;
    for (let i = 0; i < marks.length; i++){
        summ += marks[i];
    }
    return (summ/marks.length);
    }
}



function askDrink(name,dateOfBirthday){
    let yearBirthday = dateOfBirthday.getFullYear();
    let toDay = new Date();
    var todayYear = toDay.getFullYear(); 
    let difference = (todayYear - yearBirthday);
    if (difference >= 18){
        return (`Не желаете ли олд-фэшн, ${name}?`)
    }
    else{
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`)
}
return (difference);
}