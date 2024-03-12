// foo()
// function foo() {
 // console.log( 'Hello World!' );
//}

//const foo2 = function() {
  //console.log('Hello World 2!');
//}
//foo2()



//'use strict'

//let name = 'Arsenii';

//function foo() {
  //let age = 27;
  //console.log('Hello', name);
  //console.log('My', age);
//}

//foo();



//let age = 28;
  //console.log(age);


//let name = 'Arsenii';

//function foo() {
  // name = 'Ivan'
   //console.log('Hi', name);
 //}

//console.log('Hi', name);
//foo()



// 1. Создание функции getAllServicePrices (function expression)
let getAllServicePrices = function() {
  let servicePrice1 = 100;
  let servicePrice2 = 150;
  let totalServicePrice = servicePrice1 + servicePrice2;

  return totalServicePrice;
};

// 2. Создание функции getFullPrice (function declaration)
function getFullPrice(screenPrice, allServicePrices) {
  let fullPrice = screenPrice + allServicePrices;
  return fullPrice;
}

// 3. Создание функции getTitle (с использованием методов строк)
function getTitle(titleProject) {
  let editedTitle = titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
  return editedTitle;
}

// 4. Создание функции getServicePercentPrices
function getServicePercentPrices(fullPrice, percent) {
  let percentageResult = (fullPrice * percent) / 100;
  let servicePercentPrice = fullPrice - percentageResult;
  return servicePercentPrice;
}

// 5. Создание функции getRollbackMessage
function getRollbackMessage(fullPrice) {
  if (fullPrice > 50000) {
    console.log('Скидка для клиента: 10%');
  } else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log('Скидка для клиента: 5%');
  } else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log('Скидка для клиента: Без скидки');
  } else if (fullPrice < 0) {
    console.log('Ошибка: Стоимость проекта меньше 0');
  } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверьте все варианты стоимости проекта');
  }
}

// Основной код
let allServicePrices = getAllServicePrices();
let screenPrice = 5000; // Пример стоимости вёрстки
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let editedTitleProject = getTitle('мой Проект'); // Пример начального названия проекта
let servicePercentPrice = getServicePercentPrices(fullPrice, 15); // Процент отката подрядчику

// Вывод результатов
console.log('Общая стоимость дополнительных услуг:', allServicePrices);
console.log('Общая стоимость проекта:', fullPrice);
console.log('Отредактированное название проекта:', editedTitleProject);
console.log('Итоговая стоимость за вычетом процента подрядчику:', servicePercentPrice);
getRollbackMessage(fullPrice);
















