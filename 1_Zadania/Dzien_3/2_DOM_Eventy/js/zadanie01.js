/**
 * Created by Jacek on 2016-01-12.
 */

// Dodać DOMContentLoaded

document.addEventListener("DOMContentLoaded", function() {

    console.log('dziala');

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});