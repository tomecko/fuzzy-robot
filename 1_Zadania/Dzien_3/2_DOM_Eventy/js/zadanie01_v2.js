// w zadaniu jest napisane:
// "Stwórz event DOMContentLoaded dla elementu document"
// To duży skrót myślowy albo wręcz bzdura.
// Ty nie stwarzasz eventu tylko dodajesz listenera (nasluchiwacza:P) do niego
// Z tym kodem lub bez, to ten event i tak by istniał.
// Tylko kwestia jest taka czy na tym evencie coś się dzieje.
// W zadaniu 2 już autor lepiej mówi: "podepnij"

document.addEventListener('DOMContentLoaded', function() {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});
