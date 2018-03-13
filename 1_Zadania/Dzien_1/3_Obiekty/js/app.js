// Zadanie 1 z wykladowca

var country = {
    capital: 'Warsaw',
    population: 38000000,
    president: 'Andrzej Duda',
    primeMinisters: ['Mati Morawiecki']
}

console.log(country);

// Zadanie 2 z wykladowca

var timeMachine = {
    shape: 'square',
    model: 'Delorean',
    run: function(date, place) {
        console.log('You travelled to: ' + date + ' to place named ' + place);
    }
}

console.log(timeMachine);
timeMachine.run('01.01.2077','Warsaw');


// Zadanie 1

var book = {
    title: 'Wiedzmin',
    author: 'A. Sapkowski',
    numberOfPages: 320
}

console.log(book);


// Zadanie 2

var person = {
    name: 'Łukasz',
    age: 31,
    sayHello: function() {
        console.log('hello');
    }
}

console.log(person);
person.sayHello();


// Zadanie 3

var recipe = {
    title: 'Stek',
    servings: 1,
}

recipe.ingredients = ['miesko','nachos', 'salata'];

console.log(recipe);


// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon);