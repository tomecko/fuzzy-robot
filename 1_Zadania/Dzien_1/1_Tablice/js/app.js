// Zadanie 1 z wykładowcą

function distFromAverage(arr) {
    var avg;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    avg = sum / arr.length;

    var arrToReturn = [];

    for (var i = 0; i < arr.length; i++) {
        arrToReturn[i] = Math.abs(arr[i] - avg);
    }

    return arrToReturn;
}

distFromAverage([1,2,3,4,5,6,7]);


// Zadanie 1

var arr = ["jablko", "pomarancza", "grejpfrut"];

console.log(arr[arr.length-1]);

for (i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


// Zadanie 3

function printTable(array) {
    for (i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}

printTable([1,2,3,4]);


// Zadanie 4

function multiply(array) {

    var multiplication = array[0];

    for (i=1; i<array.length; i++) {
        multiplication *= array[i];
    }

    console.log(multiplication);
}

multiply([1,2,3,4,5,6,7]);


// Zadanie 5

function getEvenAverage(array) {

    var array_temp = [];
    var sum = 0;
    var avg;

    for (i=0; i<array.length; i++) {
        if (array[i]%2==0) {
            array_temp.push(array[i]);
            sum += array[i];
            console.log(array[i]);
        }
    }

    if (sum==0) {
        console.log(null);
        return null;
    }

    avg = sum/array_temp.length;

    console.log(avg);

}

// getEvenAverage([1,2,3,4,5,6,7]);
getEvenAverage([1,1,1,1]);


// Zadanie 6

function sortArray(array) {
    array.sort(function(a, b){return a-b});
    console.log(array);
}

sortArray([145,11,3,64,4,6,10]);


// Zadanie 7

var array_sum = [];

function addArrays(array1, array2) {
    for (i=0; i<array1.length; i++) {
        array_sum.push(array1[i] + array2[i]);
    }

    console.log(array_sum);
}

// pastebin.com/N836AUrw
// Przemyśleć rozwiązanie ze slicem i pocieciem dwoch tabel na rowne dlugosci

addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);