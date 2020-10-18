let min_value = 1, max_value = 0;

// сначала посчитаем количество записей на сайте => оно запишется в переменную max_value
countAmountOfPages();

// функция получения количества статей на сайте
function countAmountOfPages() {
    max_value = document.getElementById("max-value").innerHTML;
    return max_value;
}

// функция для вычисления рандомного значения от min включительно до max включительно
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// функция перехода на рандомную статью
function moveToRandomPage() {
    let random_number = getRandomIntInclusive(min_value, max_value);
    document.location.href = "http://127.0.0.1:8000/list/" + random_number + "/";
}