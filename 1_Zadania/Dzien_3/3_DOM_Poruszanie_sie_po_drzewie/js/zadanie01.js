/**
 * Created by Jacek on 2016-01-12.
 */

 // Zadanie 1

document.addEventListener('DOMContentLoaded', function() {

    var elementListButton = document.querySelectorAll('.button');
    console.dir(elementListButton);

    // var elementListBox = document.querySelectorAll('.box');
    // console.dir(elementListBox);

    for (var i=0; i<elementListButton.length; i++) {
        var element = elementListButton[i];
        element.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
        })
    }
});