function countHello(number) {
    if (number >=1 && number <=10) {
            var counter = 1;
            var interval = setInterval(function () {
                console.log("Hello " + counter);
                if (counter == number) {
                    clearInterval(interval);
                }
                counter++;
                }, 1000);

    } else {
        console.log("Podaj wartość w przedziale od 1 do 10");
    }
}

countHello(9);

// Zadanie wspólne z wykładowcą

//-------- zadanie Funkcje Czasu D1 F1 -------
function countHello(number) {
    if (number <=10 && number >0) {
        console.log('interval');
        var counter = 1;
        var interval = setInterval(function(){

            console.log('Hello No: ' + counter++);

            if (counter > number) {
                clearInterval(interval);
            }

        }, 1000);

    } else {
        console.log('Złe argumenty');
    }

}
countHello(5);