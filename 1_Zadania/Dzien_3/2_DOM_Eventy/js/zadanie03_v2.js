document.addEventListener('DOMContentLoaded', function () {

    // TOMEK Probowałem zrobić to tak, żeby wszystkie buttony i spany mieć w postaci listy i je po kolei wywoływać, ale nie działa

    // var elementListButtons = document.querySelectorAll('button');
    // console.dir(elementListButtons);
    //
    // var elementListCounters = document.querySelectorAll('button + p > .counter');
    // console.dir(elementListCounters);
    //
    // for (var i=0; i<elementListButtons.length; i++) {
    //     var elementButton = elementListButtons[i];
    //     // console.log(elementButton);
    //     var elementCounter = elementListCounters[i];
    //     // console.log(elementCounter);
    //
    //
    //
    //     var counter = 1;
    //
    //     elementButton.addEventListener('click', function increment() {
    //         console.log(elementCounter);
    //         // elementCounter.querySelector('button + .counter').innerText = counter;
    //         elementCounter.innerText = counter;
    //         counter++;
    //     });
    // }






    // Button 1

    var elementButton1 = document.querySelector('#button1');
    console.dir(elementButton1);

    var elementCounter1 = document.querySelector('#button1 + p > .counter');
    console.dir(elementCounter1);

    var counter1 = 1;

    elementButton1.addEventListener('click', function increment1() {
        elementCounter1.innerText = counter1++;
        // console.log('test');
    });

    // Button 2

    var elementButton2 = document.querySelector('#button2');
    console.dir(elementButton2);

    var elementCounter2 = document.querySelector('#button2 + p > .counter');
    console.dir(elementCounter2);

    var counter2 = 1;

    elementButton2.addEventListener('click', function increment2() {
        elementCounter2.innerText = counter2++;
        // console.log('test');
    });

    // Button 3

    var elementButton3 = document.querySelector('#button3');
    console.dir(elementButton3);

    var elementCounter3 = document.querySelector('#button3 + p > .counter');
    console.dir(elementCounter3);

    var counter3 = 1;

    elementButton3.addEventListener('click', function increment3() {
        elementCounter3.innerText = counter3++;
        // console.log('test');
    });

});