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
    return Math.floor(Math.random() * (max - min + 1)) + min; // максимум и минимум включаются
}

// функция перехода на рандомную статью
function moveToRandomPage() {
    let random_number = getRandomIntInclusive(min_value, max_value);
    document.location.href = "/list/" + random_number + "/";
}

// change post language

let element_title_en = document.getElementById("post-title-en");
let element_title_ru = document.getElementById("post-title-ru");
let element_text_en = document.getElementById("post-text-en");
let element_text_ru = document.getElementById("post-text-ru");
let element_author_en = document.getElementById("post-author-en");
let element_author_ru = document.getElementById("post-author-ru");

function changeLangForEn() {
    
    if (element_text_en.classList.contains("hidden")) {
        // change title languange
        element_title_en.classList.remove("hidden");
        element_title_ru.classList.add("hidden");

        // change text language
        element_text_en.classList.remove("hidden");
        element_text_ru.classList.add("hidden");

        // change author language
        element_author_en.classList.remove("hidden");
        element_author_ru.classList.add("hidden");
    }
}

function changeLangForRu() {
    if (element_text_ru.classList.contains("hidden")) {
        // change title languange
        element_title_ru.classList.remove("hidden");
        element_title_en.classList.add("hidden");

        // change text language
        element_text_ru.classList.remove("hidden");
        element_text_en.classList.add("hidden");

        // change author language
        element_author_ru.classList.remove("hidden");
        element_author_en.classList.add("hidden");
    }
}

setHeaderToFixed();

// make the header fixed at the top of the page after some scroll
function setHeaderToFixed() {
    let header = document.getElementById("header");
    let headerHeight = header.offsetHeight;
    let scrollOffset = document.documentElement.scrollTop;

    window.addEventListener("scroll", function(e) {
        scrollOffset = window.scrollY;
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= headerHeight) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
}

// jquery

$(function() {
    // menu nav toggle

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
    });
});