document.addEventListener('DOMContentLoaded', function() {

    var elementListButtons = document.querySelectorAll('button');
    console.dir(elementListButtons);

    var elementCounter = document.querySelector('.counter');
    console.dir(elementCounter);

    var counter = 1;

    for (var i=0; i<elementListButtons.length; i++) {
        elementListButtons[i].addEventListener('click', function() {
            elementCounter.innerText = counter++;
        });
    };

});