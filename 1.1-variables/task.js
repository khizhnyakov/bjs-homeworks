 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */



function averageMark(algebra, geography, physics) {
	
    
	return (algebra+geography+physics)/3
}

function sayHello(userName) {

   let myName = userName;
   let message = ("Привет, мир! Меня зовут");

	//return (message + userName)
	return (`${message} ${myName}`)
}

function calculateFormula() {
    
let x=2;
let y=22;
let z=0;
let result=(x * y + 5 * z + x - 1);
    
    return (result)
}
