/**
 * Created by Jacek on 2016-01-12.
 */

// Zadanie 2

document.addEventListener('DOMContentLoaded', function() {

    var elementListButton = document.querySelectorAll('.button');
    console.dir(elementListButton);

    // var elementListBox = document.querySelectorAll('.box');
    // console.dir(elementListBox);

    for (var i=0; i<elementListButton.length; i++) {
        var element = elementListButton[i];
        element.addEventListener('click', function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
        })
    }
});