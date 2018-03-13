// ZADANIE 1

function getNumber(number, array) {

    var exist = 0;

    for (var i=0; i<array.length; i++) {
        if (array[i] == number) {
            exist++;
        }
    }

    if (exist>0) {
        console.log(true);
    } else {
        console.log(false);
    }
}


getNumber(2, [33, 54, 2, 1, 4, 100]);


// ZADANIE 2

function createIdentityMatrix(rows, columns) {

    var arr_result = [];

    for (var i=0; i<rows; i++) {
        arr_result[i] = [];
        for (var j = 0; j < columns; j++) {
            if (i == j) {
                arr_result[i][j] = 1;
            } else {
                arr_result[i][j] = 0;
            }
        }
    }
    console.log(arr_result);
}

createIdentityMatrix(5,5);


// ZADANIE 1 - DODATKOWE

function addTheSameNumbers(number, array) {

    var sum = null;

    function number_sum(array_value) {
        if (number==array_value) {
            sum += array_value;
        }
        return sum;
    }

    array.forEach(number_sum);
    console.log(sum);
}

addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);


// ZADANIE 2 - DODATKOWE

// Coś jest nie tak z poniższym - sprawdzić

function factors(number) {
    var factors_array = [];

    for (counter=number; counter=0; counter--) {
        console.log(counter);
        if (number % counter == 0) {
            factors_array.push(counter);
        }
    }
    console.log(factors_array);
}

factors(5);


// Zadanie 3 - dodatkowe

function getMissingElement(array) {
    var result = null;
    for (i=1; i<array.length; i++) {
        if (array[i] - array[i-1] != 1) {
            result = array[i]-1;
            break;
        }
    }
    console.log(result);
}


// Zadanie 4 - dodatkowe

function getLastNumbers(number, array = []) {
    var array_result = [];
    //Ponizsze rozwiazanie  tez dziala, ale daje tablice w odwrotnej kolejnosci, ktora trzeba by dodatkowo przesortowac - stad finalnie uzylem slice()
    //for (i=1; i<=number; i++) {
    //	array_result.push(array.pop(number));
    //}
    //console.log(array_result);

    if (number) {
        array_result.push(array.slice(number*(-1)));
    }
    console.log(array_result);
}

getLastNumbers(2, [1,2,3,4,5,6,7]);