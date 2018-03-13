// Zadanie z wykładowcą

var elementTitle = document.querySelector('.title');
console.dir(elementTitle);

function getDataAnimation(element) {
    var result = element.dataset.animation;
    return result;
}

console.dir(getDataAnimation(elementTitle));


// Zadanie 1

// Punkt 1
var elementId_v1 = document.getElementById('home');
console.log(elementId_v1);
var elementId_v2 = document.querySelector('#home');
console.log(elementId_v2);

// Punkt 2
var elementLi = document.querySelector('li[data-direction]');
console.dir(elementLi);

// Punkt 3
var elementBlock = document.querySelector('.block');
console.dir(elementBlock);


// Zadanie 2

// Punkt 1
var elementListLiNavTag = document.querySelectorAll('nav li');
console.dir(elementListLiNavTag);

// Punkt 2
var elementListPDiv = document.querySelectorAll('div p');
console.dir(elementListPDiv);

// Punkt 3
var elementListDivArticleTag = document.querySelectorAll('article div');
console.dir(elementListDivArticleTag);


// Zadanie 3

// Punkt 1
var elementArticleFirst = document.querySelector('article.first');
console.dir(elementArticleFirst);
var elementArticleFirstH1 = elementArticleFirst.querySelectorAll('h2');
console.dir(elementArticleFirstH1);


