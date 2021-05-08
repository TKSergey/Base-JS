'use strict'

//1. Почему код дает именно такие результаты?
var a = 1,
   b = 1,
   c, d;
c = ++a;
alert(c); // 2 потому что префиксная форма. К значению а сразу прибавляеться +1
d = b++;
alert(d); // 1 потому что постфиксная форма. К значению b прибавляеться +1 после вывода
c = (2 + ++a);
alert(c); // 5 потому что к значению а прибавляеться еще +1 (стало 3) и складываеться с 2
d = (2 + b++);
alert(d); // 4 потому что к значению b прибавляеться еще +1 только после вывода (сейчас оно пока что 2) и складываеться с 2
alert(a); // 3 к а прибавилось два раза по +1
alert(b); // 3 к b прибавилось два раза по +1


//2.  Чему будет равен x ?
var a = 2;
var x = 1 + (a *= 2); // х будет равен 5

/*3. Объявить две целочисленные переменные— a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
   если a и b положительные, вывести их разность;
   если а и b отрицательные, вывести их произведение;
   если а и b разных знаков, вывести их сумму;
  Ноль можно считать положительным числом. */

var a = 5;
var b = 0;
var x;
if (a >= 0 && b >= 0) {
   x = a - b;
   alert(x);
} else if (a < 0 && b < 0) {
   x = a * b;
   alert(x);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
   x = a + b;
   alert(x);
}


//4. Присвоить переменной а значение в промежутке[0. .15].С помощью оператора switch организовать вывод чисел от a до 15.

var a = +prompt("Введите число от 0 до 15");
switch (a) {
   case 0:
      alert("Ваше число 0")
      break;
   case 1:
      alert("Ваше число 1")
      break;
   case 2:
      alert("Ваше число 2")
      break;
   case 3:
      alert("Ваше число 3")
      break;
   case 4:
      alert("Ваше число 4")
      break;
   case 5:
      alert("Ваше число 5")
      break;
   case 6:
      alert("Ваше число 6")
      break;
   case 7:
      alert("Ваше число 7")
      break;
   case 8:
      alert("Ваше число 8")
      break;
   case 9:
      alert("Ваше число 9")
      break;
   case 10:
      alert("Ваше число 10")
      break;
   case 11:
      alert("Ваше число 11")
      break;
   case 12:
      alert("Ваше число 12")
      break;
   case 13:
      alert("Ваше число 13")
      break;
   case 14:
      alert("Ваше число 14")
      break;
   case 15:
      alert("Ваше число 15")
      break;
}

//5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.

function summa(x, y) {
   return (x + y);
}

function minus(x, y) {
   return (x - y);
}

function multiply(x, y) {
   return (x * y);
}

function division(x, y) {
   return (x / y);
}
var x = 5;
var y = 10;
var sum = summa(x, y);
var min = minus(x, y);
var mult = multiply(x, y);
var div = division(x, y);
alert(sum);
alert(min);
alert(mult);
alert(div);

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2— значения аргументов, operation— строка с названием операции.В зависимости от переданного значения выполнить одну из арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(применить switch).

var arg1 = 10;
var arg2 = 4;
var operation = prompt("Введите математическую операцию");
var c = mathOperation(arg1, arg2, operation);
alert(c);

function mathOperation(arg1, arg2, operation) {
   switch (operation) {
      case 'сложение':
         return arg1 + arg2;
         break;
      case 'вычитание':
         return arg1 - arg2;
         break;
      case 'деление':
         return arg1 / arg2;
         break;
      case 'умножение':
         return arg1 * arg2;
         break;
   }
}

//7.* Сравнить null и 0. Объяснить результат.

alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

// нестрогое равенство и сравнения > < >= <= работают по - разному.Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение(3) null >= 0 истинно, а null > 0 ложно.
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.Поэтому(2) null == 0 ложно.


//8.* С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val— заданное число, pow–— степень.

function power(val, pow) {
   if (pow == 1) {
      return val;
   } else {
      return val * power(val, pow - 1);
   }
}

alert(power(2, 3));