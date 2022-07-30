// get the number of articles on the site
function getAmountOfPages() {
    let max_value = document.getElementById("max-value").innerHTML;
    return max_value;
}

// get a random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // the maximum and the minimum are inclusive
}

// go to a random article
function moveToRandomPage() {
    let min_value = 1;
    let max_value = getAmountOfPages();
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

// mobile menu

let navToggle = document.getElementById("nav-toggle");
let nav = document.getElementById("nav");

navToggle.addEventListener("click", function(e) {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
});