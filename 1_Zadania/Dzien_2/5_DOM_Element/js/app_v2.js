/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

// Zadanie z wykładowcą

    function getDatasInfo(elements) {
        var elementsArray = [];
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var result = element.dataset.color;
            elementsArray.push(result);
        }
        return elementsArray;
    }

    // console.log(getDatasInfo(links));

// Zadanie 1

    // console.log(homeElement);
    // console.log(childElements);
    // console.log(banner);
    // console.log(blocks);
    // console.log(links);

    function printElementListContent(elementList) {
        for (var i=0; i<elementList.length; i++) {
            var element = elementList[i];
            console.log("Tag: " + element.tagName);
            console.log("Classes: " + element.className);
        }
    }

    // printElementListContent(childElements);
    // printElementListContent(blocks);
    // printElementListContent(links);

    // console.dir(links);

// Zadanie 2

    function printElementListInnerOuterHTML(elementList) {
        for (var i=0; i<elementList.length; i++) {
            var element = elementList[i];
            console.log("Inner HTML: " + element.innerHTML);
            console.log("Outer HTML: " + element.outerHTML);
        }
    }

    function changeElementListInnerOuterHTML(elementList) {
        for (var i=0; i<elementList.length; i++) {
            var element = elementList[i];
            element.innerHTML = "Nowa wartość diva o klasie blocks";
        }
    }

    // printElementListInnerOuterHTML(blocks);
    // changeElementListInnerOuterHTML(blocks);
    // printElementListInnerOuterHTML(blocks);

// Zadanie 3

    var footer = document.querySelector('#mainFooter');
    // console.dir(footer);

    function getId(element) {
        return element.id;
    }

    // console.log(getId(footer));

// Zadanie 4

    // console.dir(childElements);

    function getTags(elements) {
        var arrayResult = [];
        for (var i=0; i<elements.length; i++) {
            var element = elements[i];
            arrayResult[i] = element.tagName;
        }
        return arrayResult;
    }

    // console.log(getTags(childElements));

// Zadanie 5

    // console.dir(banner);

    function getClassInfo(element) {
        return element.classList;
    }

    // console.log(getClassInfo(banner));

// Zadanie 6

    var elementListLiNavTag = document.querySelectorAll('nav li');
    // console.dir(elementListLiNavTag);

    function setDataDirection(elements) {
        for (var i=0; i<elements.length; i++) {
            var element = elements[i];
            // console.log(element.dataset);
            if (!element.hasAttribute('data-direction') == true) {
                element.setAttribute('data-direction', 'top');
            }
        }
    }

    setDataDirection(elementListLiNavTag);
    console.dir(elementListLiNavTag);

});