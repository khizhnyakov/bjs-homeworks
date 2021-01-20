
String.prototype.isPalindrome = function (){
  char  = this.toString().toLowerCase().split(' ').join('').split(''); // разбивает строку на список символов
  return (char.join() == char.reverse().join())
   //  возвращает true если условие в скобках выполняется, если список букв читается одинаково и в прямом и в обратном порядке
 }
 
   //  возвращает true если условие в скобках выполняется, если список букв читается одинаково и в прямом и в обратном порядке

/*String.prototype.isPalindrome = function () {
var normalized = this.toLowerCase().match(/[a-z]/gi).reverse();
return normalized.join('') === normalized.reverse().join('');
}*/

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}

