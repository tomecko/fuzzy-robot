// Zadanie 1 z wykladowca

// pastebin.com/42n6jc0y

function checkArray(array) {
    var arrToReturn = [];

    for (var i = 0; i < array.length; i++) {
        arrToReturn[i] = true;

        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 != 0) {
                arrToReturn[i] = false;
            }
        }
    }

    return arrToReturn;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

checkArray( arr );


// Dane do samodzielnych zadań


var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


// Zadanie 1

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);


// Zadanie 2

for (i=0; i<task2Array[1].length; i++) {
    console.log(task2Array[1][i]);
}

for (i=0; i<task2Array.length; i++) {
    console.log(task2Array[i].length);
}

for (i=0; i<task2Array.length; i++) {
    for (j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}


// Zadanie 3

function print2Darray(array) {
    for (i=0; i<array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

print2Darray([[1,2,3],[4,5,6]]);


// Zadanie 4

array = [[7,8,9],[10,11,12]];

print2Darray(array);


// Zadanie 5

function create2DArray(rows, columns) {

    var arr_result = [];
    var start = 1;

    for (i=0; i<rows; i++) {
        arr_result[i] = [];
        for (j = 0; j<columns; j++) {
            arr_result[i][j] = start;
            start++;
        }
    }

    console.log(arr_result);
}

create2DArray(4,4);