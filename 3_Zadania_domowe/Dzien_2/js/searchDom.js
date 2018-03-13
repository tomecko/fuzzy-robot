// Zadanie 2

// Punkt 1

// Teraz de facto nigdzie nie korzystasz z tej wartości (oprócz linii 7).
var elementMenu = document.querySelector('#menu');
console.dir(elementMenu);

// 1. ta logika powinna się zadziać wewnątrz funkcji `getDataInfo`, bo jak najmniej rzeczy chcesz definiować w globalnym zakresie (global scope)
// 2. zauważ, że wyrażenie `document.querySelector('#menu')` już miałeś `wyliczone`,
// więc mogłeś napisać `elementMenu.children`
var elementMenuChildren = document.querySelector('#menu').children;
console.dir(elementMenuChildren);

// brak parametru, powinno być `getDataInfo(element) {`,
// gdzie `element` nie jest słowem specjalnym, to Twoja nazwa
function getDataInfo() {
    var arrayResult = [];
    // tu `elementMenuChildren` pochodzi z globalnego scope'a,
    // ta zmienna została zdefiniowana w linii 8,
    // lepiej by było, gdyby funkcja `getDataInfo` nie korzystała z global scope'a
    // i opierała się tylko na przekazanym jej parametrze
    for (var i=0; i<elementMenuChildren.length; i++) {
        var element = elementMenuChildren[i];
        arrayResult.push(element);
    }
    return arrayResult;
}

// W treści zadania jest "do której przekaż , jako argument , znaleziony element"
// Tu niby przekazujesz argument, ale zauważ, że w implementacji funkcji `getDataInfo`
// nie ma żadnego parametru, czyli nie przechwytujesz tam przekazanej wartości.
console.log(getDataInfo(elementMenu));


// Punkt 2

// raczej `container` :) chochlik w zadaniu
var elementMainContener = document.querySelector('#main-contener');
console.dir(elementMainContener);

// 1. nie podoba mi się nazwa parametru (`input`), jest zbyt ogólna,
// powinno być np. `element`
// nazwy zmienny/parametrów komunikują intencję kodu a `input` nic nie mówi
// 2. `getElementClass` sugeruje, że zwracasz pojedynczą wartość
// a tymczasem zwracasz tablicę, powinno być w nazwie `Classes` a nie `Class`
function getElementClass(input) {
    var classListInput = input.classList;
    var classListResult = [];
    for (var i=0; i<classListInput.length; i++) {
        // nie ma sensu tu tworzyć zmiennej `element`
        var element = classListInput[i];
        // bo od razu mogłeś napisać `.push(classListInput[i])`
        classListResult.push(element);
    }
    return classListResult;
}
// alternatywnie cała ta funkcja mogłaby wyglądać tak:
// function getElementClass(element) {
//   return element.className.split(' ');
// }
// krócej, nie? unikasz tworzenia zmiennej `classListResult`
// patrz https://developer.mozilla.org/en-US/docs/Web/API/Element/className

console.log(getElementClass(elementMainContener));


// Punkt 3

// 1. `pink-color`: słaba nazwa dla klasy, przymykamy oko, bo takie jest zadanie
// 2. zauważ, że metoda `querySelector` zwraca tylko pierwszy znaleziony element
// a miały być elementy (ale może autor zadania chciał napisać "element")
var elementPinkColor = document.querySelector('.pink-color');
console.dir(elementPinkColor);

// zadanie jest źle sformułowane, bo masz znaleźć "elementy" (l.mn.!)
// a funkcja ma się nazywać `getElementText` (l.p.!), taki błąd logiczny
function getElementText(input) {
    // ta funkcja niczego nie zwraca
    console.log(input.innerText);
}

getElementText(elementPinkColor);


// Punkt 4

var elementListImages = document.querySelectorAll('.images');
console.dir(elementListImages);

// w mocy jest uwaga dot. rozjazdu miedzy l.mn. a l.p.
function getElementAlt(input) { // j.w., nie najlepsza nazwa parametru
    var arrayResult = [];
    for (var i=0; i<input.length; i++) {
        var element = input[i]; // nie ma potrzeby tworzyć zmiennej `element`
        arrayResult.push(element.alt);
    }
    return arrayResult;
}

console.log(getElementAlt(elementListImages));


// Punkt 5

var elementListMyLink = document.querySelectorAll('.my-link');
console.dir(elementListMyLink);

function getElementHref(element) { // good!
    var arrayResult = [];
    for (var i=0; i<element.length; i++) {
        var particle = element[i];
        arrayResult.push(particle.getAttribute('href'));    // Opcja 1
        // arrayResult.push(particle.href);                 // Opcja 2
    }
    return arrayResult;
}

console.log(getElementHref(elementListMyLink));
