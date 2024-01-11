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



//1 
let allServicePrices;
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}
allServicePrices = getAllServicePrices();
console.log(allServicePrices);

//2
function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();
console.log(fullPrice);

//3
let newTitle = '';
const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}
newTitle = getTitle();
console.log(newTitle);

//4
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100));
}
servicePercentPrice = getServicePercentPrices();
console.log(servicePercentPrice);




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



