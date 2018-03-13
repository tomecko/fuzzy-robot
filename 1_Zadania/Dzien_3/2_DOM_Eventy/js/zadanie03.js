/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('p');

    // Spróbować złapać buttony w oparciu o pseudoelementy zaczynajace się od button
    // A jeśli nei wyjdzie to dla każdego osobno po id

    for (i=0; i<buttons.length; i++) {
    button.addEventListener('click', function () {
        console.log('Hurra! Dziala!');
    })
    }
});