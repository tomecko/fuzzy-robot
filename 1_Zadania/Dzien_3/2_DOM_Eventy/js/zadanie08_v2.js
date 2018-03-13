document.addEventListener('DOMContentLoaded', function() {

    var elementWidth = document.querySelector('#windowWidth');
    var elementHeight = document.querySelector('#windowHeight');
    console.dir(elementWidth);
    console.dir(elementHeight);

    elementWidth.innerText = innerWidth;
    elementHeight.innerText = innerHeight;

    window.addEventListener('resize', function() {
        elementWidth.innerText = innerWidth;
    });

});