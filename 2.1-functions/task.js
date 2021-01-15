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
	console.log('Вычисляем корни квадратного уравнения ${a}x² + ${b}x +${c}');
	console.log(`Значение дискриминанта: D ${result.D}`);

  if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	 }
    	else if (result.D > 0){
		 console.log('Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}');
	 }
	else  
	console.log(`Уравнение не имеет вещественных корней`);
}