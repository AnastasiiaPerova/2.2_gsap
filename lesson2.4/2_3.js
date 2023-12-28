let screenPrice = 80000;
let percentage = 15;

let titleProject = prompt('Название проекта?');
console.log(titleProject);
let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);
let responsive = prompt('Нужен ли респонсивный сайт?');
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let persentResult = +fullPrice * (percentage / 100)
console.log(persentResult, 'Процента, который мы отдадим подрядчику/партнеру');

let servicePercentPrice = fullPrice - persentResult;
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумму за вычетом процента');

let a = fullPrice;
if (a >= 50000) {
    console.log('Cкидка в 10%');
} else if (a > 20000 && a < 50000) {
    console.log('Cкидка 5%');
} else if (a <= 20000 && a >= 0) {
    console.log('Cкидка не предусмотрена');
} else if (a < 0) {
    console.log('Что то пошло не так');
}