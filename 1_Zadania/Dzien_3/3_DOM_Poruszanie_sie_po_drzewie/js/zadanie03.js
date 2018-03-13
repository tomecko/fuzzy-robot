/**
 * Created by Jacek on 2016-01-12.
 */

// Zadanie 3

document.addEventListener('DOMContentLoaded', function() {

    var elementListContainer = document.querySelectorAll('.listContainer');
    console.dir(elementListContainer);

    // var elementListBox = document.querySelectorAll('.box');
    // console.dir(elementListBox);

    for (var i=0; i<elementListContainer.length; i++) {
        var element = elementListContainer[i];
        element.addEventListener('mouseover', function() {
            this.firstElementChild.firstElementChild.style.backgroundColor = 'red';
            this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';

            for (var j=1; j<(this.firstElementChild.children.length)-1; j++) {
                var element = this.firstElementChild.children[j];
                element.style.backgroundColor = 'green';
            }
        })
    }
});