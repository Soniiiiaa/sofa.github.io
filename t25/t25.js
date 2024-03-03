// Z1
/*
let a = 3;
let b = 4;
let sum = (a*b);
console.log(sum);
*/

//Z2
/*
let c=5;
let sumb= (c*c);
console.log(sumb);
*/

// Z3
/*
let r=10;
let p=3.14;
let sumc= (p*r*r);
console.log(sumc);
*/

// Z4
/*
let a = 10;
let rCircle = (a * Math.sqrt(3)) / 6;
//Math.pow(3, 1/2) = 3 ** 1/2 = возведение в степень
let plCircle = Math.PI * rCircle ** 2;
let plTriangle = 3 *  rCircle ** 2 * Math.sqrt(3);
let nezPl = plTriangle - plCircle;
console.log(nezPl);
*/

/*
let sentence = "ПриВіт, МЕне ЗватИ СоФІЯ. я ПоЧИнаю ВИВчати Js";
let letter = sentence.slice(0, 1);
let letter2 = sentence.slice(1, 18).toLowerCase();
let letter3 = sentence.slice(18, 20);
let letter4 = sentence.slice(20, 26).toLocaleLowerCase();
let halfText = letter + letter2 + letter3 + letter4;
console.log(halfText);
*/

/*
// Задані сторони трикутника
let a = 10;
let c = 20;

let bSquared = c*c - a*a;
let b = Math.sqrt(bSquared);

console.log(" b = " + b);

//За теоремою Вієта, знайти корені рівняння  𝑥^2−14𝑥+40=0.
// Знаходимо суму коренів
let sumOfRoots = -b / a;

// Знаходимо добуток коренів
let productOfRoots = c / a;

// Знаходимо корені рівняння за теоремою Вієта
// Корінь 1
let root1 = (sumOfRoots + Math.sqrt(sumOfRoots * sumOfRoots - 4 * productOfRoots)) / 2;

// Корінь 2
let root2 = (sumOfRoots - Math.sqrt(sumOfRoots * sumOfRoots - 4 * productOfRoots)) / 2;

console.log("Корінь 1: " + root1);
console.log("Корінь 2: " + root2);
*/

/*
let answer = prompt("Скількі років твоїй мамі?");
if(answer==40){
   console.log("Правильна відповідь");
}
else{
(console.log("Відповідь неправильна"));
} 

let answer2 = prompt("Скільки планет в Сонячній системі?");
if(answer2==8){
   console.log("Правильна відповідь");
}
else{
   (console.log("Відповідь неправильна"));
   } 
   */

/*
   let a = prompt("Введіть число а");
   let b = prompt("Введіть число b");
   if(a>b){
      console.log("a більше");
   }
   else{
      console.log("b більше");
   }
 */

/*
   //Напишіть програму, де користувач вводить температуру води, а йому виводиться її агрегатний стан.
   let температура = prompt("Введіть температуру");
   if (температура<=0){
      console.log("Агрегатний стан - твердий");
   }
   else if(температура>0 && температура<100){
      console.log("Агрегатний стан - рідкий");
   }
   else{
      console.log("Агрегатний стан - пара");
   }
   */

/*
   //Створити програму "Ваша вага"
   let вага = prompt("Введіть вашу вагу");
   let зріст = prompt("Введіть ваш зріст");
   if (зріст-100 == вага){
         console.log("Ваша вага в нормі");
   }
   else if (вага > зріст-100){
      let надлишковаВага = вага - (зріст-100);
      console.log("Ви важите більше норми, вам необхідно схуднути на " + надлишковаВага + " kg");
   }
    else if (вага<зріст-100){
      let надлишковаВага = вага + (зріст-100);
      console.log("Ви важите менше норми, вам необхідно поправитись на " + надлишковаВага + " kg");
   }
  */

   /*
//У понеділок в 8 класі такі уроки: 0 - математика, 1 - біологія, 2 - географія, 3 - інформатика, 4 - фізика,
//5 - фізкультура. Розробити програму, за допомогою якої за номером уроку визначається назва предмета.
let номерУроку = parseInt(prompt("Введіть номер уроку")) - 1;

let розклад = [
  "Математика",
  "Біологія",
  "Географія",
  "Інформатика",
  "Фізика",
  "Фізкультура",
];
console.log(розклад[номерУроку]);
/*
   let spisok = {
      key: value,
      ключ: значение
   }
                 0 ,  1 ,  2 , .... 
   let array = [el0, el1, el2];
*/

/*
let nameSurname = "Nalimova Sonya" ;

for (let i=0; i < 30; i++){
   console.log(nameSurname);
}
*/
/*
let сума = 0;
for (let число = 1; число <= 100; число++) {
   сума += число;
}
console.log("Сума чисел від 1 до 100:", сума);
*/

/*
let числа = [3, 44, 2, 77, 11, 1, 2, 55];
let сума = 0;
for (let i = 0; i < числа.length; i++) {
    сума += числа[i];
}
console.log("Сума чисел:", сума);
*/

/*
let x = -10;
let endX = 10;

while (x <= endX){
   let y = x * x;
   console.log(x + " ; " + y);
   x += 0.5
*/

/*
let operation = prompt("1 - +, 2 - -, 3 - /, 4 - *");
if(operation == 1){
   a + b
}
else if ( operation == 2)
*/


// % - выводит остачу от деления
// 10 % 2 = 0
// 11 % 2 = 1

// 9  % 3 = 0
// 10 % 3 = 1
// 11 % 3 = 2

/*
let a = prompt("Введіть число а");
   let b = prompt("Введіть число b");
   if(a>b){
      console.log("a більше");
   }
   else{
      console.log("b більше");
   }
   */

  /*
   //Користувач вводить послідовна 2 числа. Після того обирає операцію, що потрібно зробити з ними. Після того виводиться результат.
   let number1 = parseInt(prompt("Введіть перше число"));
   let number2 = parseInt(prompt("Введіть друге число"));
   let operation = prompt("Виберіть операцію (+, -, *, /):");
   
   if (operation == "+") {
      result = number1 + number2;
  } 
  else if (operation == "-") {
      result = number1 - number2;
  } 
  else if (operation == "*") {
      result = number1 * number2;
  } 
  else if (operation == "/") {
      if (number2 == 0) {
          result = "Помилка";
      } 
   else {
          result = number1 / number2;
      }
  } 
  else {
      result = "Невірна операція";
  }
   var result; 
   console.log(result);
   */

/*
   let sum = 0;
   for (let i = 6; i < 50; i++) {
   if (i % 2 ) { 
       sum += i;
   }
}
console.log(sum);
*/

/*
//Написати програму отримання таблиці множення на 9. Використати цикл "for".
for(let i = 1; i<10; i++){
   console.log("9 * " + i + " = " + i* 9);
}
*/



//МАСИВИ

/*
let cemectre = 0;
for(let i = 0; i < marksArray.length; i++){
  cemectre += marksArray[i];
}
let cemectreGrade = cemectre / marksArray.length;

console.log(cemectreGrade);

let fixGrade = prompt("Fix grade?");
if(fixGrade){
  let fixMark = prompt("Input mark to delete");
  let indexOfMark = marksArray.indexOf(+fixMark);
  marksArray.splice(indexOfMark, 1);
}

console.log(marksArray);
cemectre = 0;
for(let i = 0; i < marksArray.length; i++){
  cemectre += marksArray[i];
}
cemectreGrade = cemectre / marksArray.length;
console.log(cemectreGrade);
*/


/*
let fabricArray = [4, 2, 3, 1, 5.5];
console.log(fabricArray);

let allFabric = 0;
for (let i = 0; i < fabricArray.length; i++){
   allFabric += fabricArray[i];
}
console.log("скільки метрів тканини було витрачено : " + allFabric + "m");

let fabricOnPerson = allFabric / fabricArray.length;
console.log("середня кількість метрів, яка замовляється користувачем : " + fabricOnPerson + "m");
*/


/*
let randomWords1 = [ "кмітливий", "розумний", "серйозний", "дурний", "легковажний", "веселий" ];
let randomWords2 = [ "олень", "тумбочка", "віслюк", "коник", "дитя", "чайник" ];
let randomIndex1 = Math.floor(Math.random()*randomWords1.length);
let randomIndex2 = Math.floor(Math.random()*randomWords2.length)
console.log( "Ти " + randomWords1[randomIndex1] + " як " + randomWords2[randomIndex2]);
*/

/*
//Перетворити масив [10, 7,  5, 3, 1] у рядок “10 is bigger than 7 is bigger than 5 is bigger than 3 is bigger than 1”.
let array = [10, 7,  5, 3, 1]
console.log(array.join(" is bigger than "));
*/