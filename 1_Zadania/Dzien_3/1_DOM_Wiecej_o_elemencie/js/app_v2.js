// Zadania z wykładowcą

// Punkt 1

var elementListEven = document.querySelectorAll('.ex5 li:nth-of-type(even)');
console.dir(elementListEven);

for (var i=0; i<elementListEven.length; i++) {
    var element = elementListEven[i];
    element.style.backgroundColor = 'green';
}

// Punkt 2

var elementFive = document.querySelector('.ex5 li:nth-of-type(5)');
console.dir(elementFive);

elementFive.classList.add('big');

// Punkt 3

var elementListThird = document.querySelectorAll('.ex5 li:nth-of-type(3n)');
console.dir(elementListThird);

for (var i=0; i<elementListThird.length; i++) {
    var element = elementListThird[i];
    element.style.textDecoration = 'underline';
}


// Zadanie 1

// Chrome
var chrome = document.querySelector('.chrome');
chrome.style.backgroundImage = 'url(assets/img/chrome.png)';
chrome.style.width = '100px';

var elementChrome = document.querySelector('.ex1 .chrome + a');
console.dir(elementChrome);

elementChrome.setAttribute('href', 'https://www.google.pl/chrome/');
elementChrome.innerText = 'Chrome';

// Edge
var edge = document.querySelector('.edge');
edge.style.backgroundImage = 'url(assets/img/edge.png)';

var elementEdge = document.querySelector('.ex1 .edge + a');
console.dir(elementEdge);

elementEdge.setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');
elementEdge.innerText = 'Microsoft Edge';

// Firefox
var firefox = document.querySelector('.firefox');
firefox.style.backgroundImage = 'url(assets/img/firefox.png)';

var elementFirefox = document.querySelector('.ex1 .firefox + a');
console.dir(elementFirefox);

elementFirefox.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');
elementFirefox.innerText = 'Firefox';


// Zadanie 2

var elementIdName = document.querySelector('#name');
var elementIdFavColor = document.getElementById('fav_color');
var elementIdFavMeal = document.querySelector('#fav_meal');
console.dir(elementIdName);
console.dir(elementIdFavColor);
console.dir(elementIdFavMeal);

elementIdName.innerHTML = 'Łukasz';
elementIdFavColor.innerHTML = 'czarny';
elementIdFavMeal.innerHTML = 'sushi';


// Zadanie 3

// Punkt 1
var elementUlEx3 = document.querySelector('.ex3 ul');
console.dir(elementUlEx3);

elementUlEx3.classList.add('menu');
console.log(elementUlEx3.classList);

// Punkt 2
var elementListLiEx3 = document.querySelectorAll('.ex3 li');
console.dir(elementListLiEx3);

for (var i=0; i<elementListLiEx3.length; i++) {
    var element = elementListLiEx3[i];
    element.classList.add('menuElement');
}

console.dir(elementListLiEx3);

// Punkt 3

for (var i=0; i<elementListLiEx3.length; i++) {
    var element = elementListLiEx3[i];
    element.classList.remove('error');
}


// Zadanie 4

var elementListLiEx4 = document.querySelectorAll('.ex4 li');
console.dir(elementListLiEx4);

var counter = 1;
for (var i=0; i<elementListLiEx4.length; i++) {
    var element = elementListLiEx4[i];
    element.setAttribute('data-id', counter++);
}

console.dir(elementListLiEx4);