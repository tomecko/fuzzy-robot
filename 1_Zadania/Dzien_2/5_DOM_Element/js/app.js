/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 1

    function getDatasInfo(elements) {
        console.dir(elements);
        var colorList = [];
        for (i=0; i<elements.length; i++) {
            var color = elements[i].dataset.color;
            colorList[colorList.length] = color; //to jest to samo co push - zawsze dodajemy wartosc na miesjce ostatniej
            // colorList.push(color);
        }
        return colorList;
    }

    var result = getDatasInfo(links);
    console.dir(result);

    // Zadanie 2

    // Wartość oryginalna
    console.dir(blocks);
    console.dir(blocks[0]);

    // Wartość po modyfikacji
    for  (var i=0; i<blocks.length; i++) {
        var block = blocks[i];
        console.log(block);
        block.innerHTML = 'Nowa wartość diva o klasie blocks';
        console.log(block.innerHTML);
    }

    // Zadanie 3

    var elementMainFooter = document.querySelector('#mainFooter');
    console.dir(elementMainFooter);

    function getId(element) {

        // Wariant 1
        var value = element.getAttribute('id');
        return value;

        // Wariant 2
        var value = element.id;
        return value;
    }

    console.log(getId(elementMainFooter));

    // Zadanie 4


    console.dir(childElements);

    function getTags(elements) {
        var newTags = [];
        for (var i=0; i<elements.length; i++) {
            // newTags[i] = elements[i].tagName;
            // return newTags;

            newTags.push(elements[i].tagName);
        }
        return newTags;
    }
    console.log(getTags(childElements));

    // Zadanie 5



    function getClassInfo(element) {
        // var classList = [];
        console.dir(element.classList);
        var resultList = [];
        for (var i = 0; i < element.classList.length; i++) {
            var className = element.classList[i];
            resultList.push(className);
        }
        return resultList;
    }

    console.log(getClassInfo(banner));

    // Zadanie 6 - obecnie zamienia wszystko - sprwadzic co nie dziala

    var elementsListNavLi = document.querySelectorAll('nav li');
    console.dir(elementsListNavLi);

    function setDataDirection(elements) {
        for (i=0; i<elements.length; i++) {
            var element = elements[i];
            var newValue = 'top';
            if (!element.hasAttribute('data-direction')) {
                console.log(element);
                element.setAttribute('data-direction', newValue);
                console.log(element);
            }
        }
    }

    console.log(setDataDirection(elementsListNavLi));

    // Zadanie 6 - z wykladowca

    // var navLiList = document.querySelectorAll('nav li');
    //
    // function setDataDirection(elements) {
    //     for (var i=0; i<elements.length; i++){
    //         var element = elements[i];
    //         var newValue = 'top';
    //         if (!element.hasAttribute('data-direction')) {
    //             element.setAttribute('data-direction', newValue);
    //             // console.log('Data Direction not set');
    //         } else {
    //             // console.log('Data Direction SET');
    //         }
    //     }
    //     console.dir(elements);
    // }
    //
    // console.dir(navLiList);

    // setDataDirection(navLiList);
    //
    // var navLiLisMod = document.querySelectorAll('nav li');
    //
    // for (var i=0; i<navLiLisMod.length; i++){
    //     var element = navLiLisMod[i];
    //
    //     if (!element.hasAttribute('data-direction')) {
    //         console.log('Data Direction not set');
    //     } else {
    //         console.log('Data Direction SET');
    //     }
    //
    // }

});





