/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // Zadanie z wykładowcą

    var elementTitle = document.querySelector('.title');
    console.log(elementTitle);

    function getDataAnimatioon(element) {
        var data = element.dataset;
        var result = data.animation;
        return result;
    }

    var functionResult = getDataAnimatioon(elementTitle);
    console.dir(functionResult);

    // Zadanie 1

    var elementHomeById = document.getElementById("home");
    console.dir(elementHomeById);
    var elementHomeBySelector = document.querySelector("#home");
    console.dir(elementHomeBySelector);

    var elementLiFirstDataDirection = document.querySelector("li[data-direction]");
    console.dir(elementLiFirstDataDirection);
    var elementLiFirstNotDataDirection = document.querySelector("li:not([data-direction])");
    console.dir(elementLiFirstNotDataDirection);

    var elementBlock = document.querySelector(".block");
    console.dir(elementBlock);

    // Zadanie 2

    var elementAllLiTagNav = document.querySelectorAll("nav li");
    console.dir(elementAllLiTagNav);

    var paragraphDiv = document.querySelectorAll('div p');
    console.dir(paragraphDiv);

    var elementAllDivTagArticle = document.querySelectorAll("article div");
    console.dir(elementAllDivTagArticle);

    // Zadanie 3
    var elementsFirstArticleH2 = document.querySelectorAll('article.first h2');
    console.dir(elementsFirstArticleH2);

    var elementsFirstArticle = document.querySelectorAll('article.first');
    console.dir(elementsFirstArticle);
    var elementsFirstArticleH2v2 = elementsFirstArticle.querySelectorAll('h2');
    console.dir(elementsFirstArticleH2v2);

    // PRZEJRZEĆ TO PONIŻEJ

    //-------------- Czesc 1 --------------------
    var tagArticleFirst = document.querySelector('article.first');
    console.dir(tagArticleFirst);

    //-------------- Czesc 2 --------------------
    var headerList = tagArticleFirst.querySelectorAll('h2');

    console.dir(headerList);

    //----- Wariant 1 gdy tylko potrzebujemy ilosc elementow ----
    console.dir(headerList.length);

    //------ Wariant 2 gdybysmy potrzebowali cos zrobic z elementami ----
    var counter = 0
    for (var i=0; i<headerList.length; i++){
        counter++;
    }
    console.dir(counter);
    console.dir(headerList.length);

});
