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
    document.location.href = "/list/" + random_number + "/";
}

// change post language

element_text_en = document.getElementById("post-text-en");
element_text_ru = document.getElementById("post-text-ru");
element_author_en = document.getElementById("post-author-en");
element_author_ru = document.getElementById("post-author-ru");

function changeLangForEn() {
    
    if (element_text_en.classList.contains("hidden")) {
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
        // change text language
        element_text_ru.classList.remove("hidden");
        element_text_en.classList.add("hidden");

        // change author language
        element_author_ru.classList.remove("hidden");
        element_author_en.classList.add("hidden");
    }
}

// jquery

$(function() {
    var header = $("#header"),
        introL = $("#intro-detail-list").innerHeight(),
        introP = $("#intro-detail-post").innerHeight(),
        introA = $("#intro-detail-about").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // fixed header

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {     
        if ((scrollOffset >= introL) || (scrollOffset >= introP) || (scrollOffset >= introA)) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    // smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // menu nav toggle

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
    });
});