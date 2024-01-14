let screenPrice;
let percentage = 15;
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let rollbackMessage;
let service1;
let service2;




//Проверка на число:
//isNaN - функция, которая определяет нечисловое значением
//parseFloat - функция, которая преобразует string to num
//! - отрицание выражения
//isFinite - функция, которая проверяет на конечное числом

const checkNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}




const asking = function () {
    titleProject = prompt('Название проекта?', 'бот');
    screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями', 'Шаблонные');

    screenPrice = prompt('Cколько это будет стоить?', 80000);

    while (!checkNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить', 80000)
    }
    screenPrice = Number(screenPrice);

    responsive = prompt('Нужен ли респонсивный сайт?', 'Нужен');
}




//Функция возвращает стоимость всех дополнительных услуг:

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какая дополнительная услуга нужна?', 'Услуга 1');
        } else if (i === 1) {
            service2 = prompt('Какая ещё дополнительная услуга нужна', 'Услуга 2');
        }

        let textFromPromt = '';

        //Метод trim() - удаляет пробельные символы с начала и конца строки

        while (!checkNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить')
        }
        sum = sum + Number(textFromPromt)
    }
    return sum

}



//Функция возвращает стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice):

function getFullPrice() {
    return screenPrice + allServicePrices;
}



//Функция изменяет название проекта:

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}



//Функция возвращает итоговую стоимость за вычетом процента подрядчику:

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100));
}




//Предоставление скидки:

const getRollbackMessage = function (price) {

    if (price >= 50000) {
        return 'Cкидка в 10%';
    } else if (price > 20000 && price < 50000) {
        return 'Cкидка 5%';
    } else if (price <= 20000 && price >= 0) {
        return 'Cкидка не предусмотрена';
    } else if (price < 0) {
        return 'Что то пошло не так';
    }
}




asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();
rollbackMessage = getRollbackMessage();



console.log(newTitle);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice));