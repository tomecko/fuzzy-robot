/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklaracja funkcji jeden - jeszcze z niej nie korzystamy
function jeden() {
    
        //Deklaracja lokalnej zmiennej zmienna1 i przypisanie wartosci 1
        var zmienna1 = 1;
    
        //Deklaracja funkcji dwa - jeszcze z niej nie korzystamy
        function dwa() {
    
            //Wyswietlamy w konsoli wartosc zmiennej 1 - zostanie ona pobrana z funkcji wyzszego rzedu jeden()
            console.log(zmienna1);
    
            //Deklaracja lokalnej zmiennej zmienna2 i przypisanie wartosci 3
            var zmienna2 = 3;
        }
    
        //Wywołanie funkcji dwa(), ponizej deklaracji
        dwa();
    
        //Chcemy wyswietlic zmienna zmienna2, ale nie jest w jej zakresie, wiec dostajemy undefined
        console.log(zmienna2)
    }
    
    //Wywolanie funkcji jeden
    jeden()