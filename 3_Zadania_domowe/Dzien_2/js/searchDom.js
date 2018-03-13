// Zadanie 2

// Punkt 1

var elementMenu = document.querySelector('#menu');
console.dir(elementMenu);

var elementMenuChildren = document.querySelector('#menu').children;
console.dir(elementMenuChildren);

function getDataInfo() {
    var arrayResult = [];
    for (var i=0; i<elementMenuChildren.length; i++) {
        var element = elementMenuChildren[i];
        arrayResult.push(element);
    }
    return arrayResult;
}

console.log(getDataInfo(elementMenu));


// Punkt 2

var elementMainContener = document.querySelector('#main-contener');
console.dir(elementMainContener);

function getElementClass(input) {
    var classListInput = input.classList;
    var classListResult = [];
    for (var i=0; i<classListInput.length; i++) {
        var element = classListInput[i];
        classListResult.push(element);
    }
    return classListResult;
}

console.log(getElementClass(elementMainContener));


// Punkt 3

var elementPinkColor = document.querySelector('.pink-color');
console.dir(elementPinkColor);

function getElementText(input) {
    console.log(input.innerText);
}

getElementText(elementPinkColor);


// Punkt 4

var elementListImages = document.querySelectorAll('.images');
console.dir(elementListImages);

function getElementAlt(input) {
    var arrayResult = [];
    for (var i=0; i<input.length; i++) {
        var element = input[i];
        arrayResult.push(element.alt);
    }
    return arrayResult;
}

console.log(getElementAlt(elementListImages));


// Punkt 5

var elementListMyLink = document.querySelectorAll('.my-link');
console.dir(elementListMyLink);

function getElementHref(element) {
    var arrayResult = [];
    for (var i=0; i<element.length; i++) {
        var particle = element[i];
        arrayResult.push(particle.getAttribute('href'));    // Opcja 1
        // arrayResult.push(particle.href);                 // Opcja 2
    }
    return arrayResult;
}

console.log(getElementHref(elementListMyLink));