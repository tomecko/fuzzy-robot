hello();

function hello() {
    console.log("Cześć");
}

hello();

var hello_official = function() {
    console.log("Witaj");
}

hello_official();

// Funkcja hello() jest wywoływana niezależnie od tego gdzie znajduje się jej deklaracja
// Funkcja hello_official() jest wywoływana tylko po jej zadeklarowaniu, bo jest wyrażeniem funkcyjnym - wywołanie jej przed deklaracją podaje jako wynik błąd