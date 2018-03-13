document.addEventListener('DOMContentLoaded', function() {

    var elementBox = document.querySelector('#box');
    console.dir(elementBox);

    var elementGlobalX = document.querySelector('#globalX');
    var elementGlobalY = document.querySelector('#globalY');
    var elementLocalX = document.querySelector('#localX');
    var elementLocalY = document.querySelector('#localY');
    console.dir(elementGlobalX);

    elementBox.addEventListener('mousemove', function(event) {
        elementGlobalX.innerText = event.clientX;
        elementGlobalY.innerText = event.clientY;
        elementLocalX.innerText = event.screenX;
        elementLocalY.innerText = event.screenY;
    });


});