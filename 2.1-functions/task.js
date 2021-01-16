"use strict"

function getSolutions(a, b, c) {
	let x =[];
    let d =(b**2-4*a*c);
    if (d===0) {
    x[0] = -b/2*a;
    }
    else if (d>0){
        x[0]=(- b + Math.sqrt(d)) / (2 * a);
        x[1]=(- b - Math.sqrt(d)) / (2 * a); 
    }
    return {D:d,roots:x};
}
/*function getSolutions(a,b,c){
	let x1 =0;
	let x2 = 0;	
	let D =(b**2-4*a*c);
	if (D===0) {
	x1 = -b/2*a;
	return {D:D,roots:[x1]}
	}
	else if (d>0){
		 x1=(- b + Math.sqrt(D)) / (2 * a);
		 x2=(- b - Math.sqrt(D)) / (2 * a); 
		 return {D:D,roots:[x1,x2]}
	}
	return {D:D,roots:[ ]};
}
*/

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log('Вычисляем корни квадратного уравнения '+ a +'x² + '+b+'x + '+c);
	console.log('Значение дискриминанта: D '+result.D);

  if (result.D === 0) {
		console.log('Уравнение имеет один корень X₁ = '+ result.roots[0]);
	 }
    	else if (result.D > 0){
	  console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
	 }
	else  
	console.log(`Уравнение не имеет вещественных корней`);
}



// Создание функции getAverageScore( data ), которая имеет аргумент data. В нём хранятся данные об оценках по предметам.
function getAverageMark(marks){
	if (marks.length === 0) {
		 return 0;
	}
	else {
		 let summ = 0;
		 for (let i = 0; i < marks.length; i++){
			  summ += marks[i];
		 }
		 return (summ/marks.length);
	}
}
function getAverageScore(data) {
	//  Создание переменной для хранения суммы оценок по всем предметам
	let allAverage = 0;
	//  Создание переменной для хранения длиных объекта data
	let objectLength = 0;
	// Обход свойств объекта data
	if (Object.keys(data).length == 0) {
		 data.average = 0;
	} else {
		 for (let averageMark in data) {
			  //  Создание переменных для вычисления средней оценки за предмет
			  let value = data[averageMark];
			  let sumResult = 0;
			  if (value.length == 0) {
					data[averageMark] = 0;
					data.average = 0;
			  } else {
					//  Вычисление средней оценки за предмет
					for (let i = 0; i < value.length; i++) {
						 sumResult = sumResult + value[i];
					}
					data[averageMark] = sumResult / value.length;
					//  Вычисление средней оценки по всем предметам с добавлением нового свойства average в объект
					allAverage = allAverage + data[averageMark];
					objectLength++;
					data.average = allAverage / objectLength;
			  }
			  //  Вовзрат в функцию аргумента data
		 }
	}
	return data;
}