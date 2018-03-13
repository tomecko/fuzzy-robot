
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji sortArray()
function sortArray() {
    
        //Wywołanie funkcji wyższego rzędu sort() dla tablicy points
        points.sort(function(a, b){
            //Dla funkcji sort podajemy schemat w jaki sposób funkcja ma sortować
            return a-b;
        });
    
        //Zwracamy tablicę points
        return points;
    }
    
    //Wywołanie funkcji sortArray()
    sortArray();
    