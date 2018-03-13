/**
 * Created by Jacek on 2016-01-12.
 */

// Zadanie z wykładowcą

document.addEventListener('DOMContentLoaded', function() {

    // Punkt 1

    var elementClassFirst = document.querySelector('.first');
    console.dir(elementClassFirst);

    var classFirstChild1 = elementClassFirst.firstElementChild;
    console.dir(classFirstChild1);

    var classFirstChild1Child3 = classFirstChild1.children[2];
    console.dir(classFirstChild1Child3);

    // Punkt 2

    var elementClassSecond = document.querySelector('#second');
    console.dir(elementClassSecond);

    var classSecondParent = elementClassSecond.parentElement;
    console.dir(classSecondParent);

    var classSecondParentChild4 = classSecondParent.children[3];
    console.dir(classSecondParentChild4);

    // Punkt 3

    var elementAttrDataEx = document.querySelector('[data-ex=third]');
    console.dir(elementAttrDataEx);

    var elementAttrDataExGrandpa = elementAttrDataEx.parentElement.parentElement;
    console.dir(elementAttrDataExGrandpa);

    var elementAttrDataExGrandpaChildLast = elementAttrDataExGrandpa.lastElementChild;
    console.dir(elementAttrDataExGrandpaChildLast);

    var elementAttrDataExGrandpaChildLastChildFirst = elementAttrDataExGrandpaChildLast.firstElementChild;
    console.dir(elementAttrDataExGrandpaChildLastChildFirst);

    var index = Math.floor(elementAttrDataExGrandpaChildLastChildFirst.children.length/2);
    var elementAttrDataExGrandpaChildLastChildFirstChildMiddle = elementAttrDataExGrandpaChildLastChildFirst.children[index];
    console.dir(elementAttrDataExGrandpaChildLastChildFirstChildMiddle);

    // Punkt 4

    var elementClassForth = document.querySelector('.forth');
    console.dir(elementClassForth);

    var elementClassForthParent = elementClassForth.parentElement;
    console.dir(elementClassForthParent);

    var elementClassForthParentFirstChild = elementClassForthParent.querySelector('article');
    console.dir(elementClassForthParentFirstChild);

    var elementClassForthParentFirstChildSecondChild = elementClassForthParentFirstChild.querySelectorAll('p')[1];
    console.dir(elementClassForthParentFirstChildSecondChild);


    // Zadanie 1






});

