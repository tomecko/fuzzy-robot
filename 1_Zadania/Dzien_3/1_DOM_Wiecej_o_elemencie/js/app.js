/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    var ex5 = document.querySelector('.ex5');
    console.dir(ex5);

    var ex5Even = ex5.querySelectorAll('li:nth-of-type(even)');
    console.dir(ex5Even);
    for (i=0; i<ex5Even.length; i++) {
        ex5Even[i].style.backgroundColor ='green';
    }

    var ex5Five = ex5.querySelector('li:nth-of-type(5)');
    console.dir(ex5Five);
    // ex5Five.setAttribute('className', 'big'); // nie działa
    // console.dir(ex5Five);

    ex5Five.classList.add('big');
    console.dir(ex5Five);

    // TO PONIŻEJ NIE DZIAŁA - SPRAWDZIĆ

    var exLiThirdElement = ex5.querySelectorAll('li a');

    for (var i=0; i<exLiThirdElement.length; i++) {
        if (exLiThirdElement[i]%3 == 0) {
            exLiThirdElement[i].style.textDecoration = 'underline';
        } else {
            exLiThirdElement[i].style.textDecoration = 'none';
        }
    }

    // ROZWIĄZANIE Z WYKŁADOWCĄ - DZIAŁA

    // var exLiEveryThird = ex5.querySelectorAll('li a');
    //
    // for (var i=0; i<exLiEveryThird.length; i++){
    //
    //     var element = exLiEveryThird[i];
    //
    //     //------------- Wariant 1 ---------------------
    //     if(!(i%3 === 0)){
    //         element.style.textDecoration = 'none';
    //     }
    //
    //     //------------- Wariant 2 ---------------------
    //     /
    //     //for every third element in table
    //     if(i%3 === 0){
    //         // element.style.textDecoration = 'underline';
    //     } else {
    //         element.style.textDecoration = 'none';
    //     }

    // ZADANIE 1

    // EDGE

    var edge = document.querySelector('.edge');
    console.dir(edge);
    edge.style.backgroundImage = 'url(assets/img/edge.png)';

    var edgeA = document.querySelector('.edge + a');
    edgeA.setAttribute("href", 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');

    // FIREFOX

    var firefox = document.querySelector('.firefox');
    console.dir(firefox);
    firefox.style.backgroundImage = 'url(assets/img/firefox.png)';

    var firefoxA = document.querySelector('.firefox + a');
    firefoxA.setAttribute("href", 'https://www.mozilla.org/pl/firefox/new');

    firefoxA.innerText = 'Firefox';

    // CHROME

    var chrome = document.querySelector('.chrome');
    console.dir(chrome);
    chrome.style.backgroundImage = 'url(assets/img/chrome.png)';

    chrome.style.width = '100px';
    chrome.style.backgroundRepeat = 'no-repeat';

    var chromeA = document.querySelector('.chrome + a');
    chromeA.setAttribute("href", 'https://www.google.pl/chrome');

    chromeA.innerText = 'Chrome';

    // ZADANIE 2

    var idName = document.querySelector('.ex2 #name');
    var idColor = document.querySelector('.ex2 #fav_color');
    var idFavMeal = document.querySelector('.ex2 #fav_meal');
    console.dir(idName);

    idName.innerHTML = "Łukasz";
    idColor.innerHTML = "Czarny";
    idFavMeal.innerHTML = "Stek";


    // ZADANIE 3

    var ex3Ul = document.querySelector('.ex3 ul');
    console.dir(ex3Ul);

    ex3Ul.classList.add('menu');
    console.dir(ex3Ul);

    var ex3Li = document.querySelectorAll('.ex3 li');
    console.dir(ex3Li);
    for (var i=0; i<ex3Li.length; i++) {
        ex3Li[i].classList.add('menuElement');
    }
    console.dir(ex3Li);

    var ex3LiError = document.querySelector('.ex3 li.error');
    console.dir(ex3LiError);
    ex3LiError.classList.remove('error');
    console.dir(ex3LiError);

    // ZADANIE 4

    var ex4Li = document.querySelectorAll('.ex4 li');
    console.dir(ex4Li);


    // Wariant 1 - z setAttribute

    var numInt;
    // for (var i=0; i<ex4Li.length; i++) {
    //     var numInt = i+1;
    //     ex4Li[i].setAttribute('data-id', numInt);
    // }
    // console.dir(ex4Li);

    // Wariant 2 - z dataset

    for (var i=0; i<ex4Li.length; i++) {
        var numInt = i+1;
        ex4Li[i].dataset.id = numInt;
    }
    console.dir(ex4Li);

});