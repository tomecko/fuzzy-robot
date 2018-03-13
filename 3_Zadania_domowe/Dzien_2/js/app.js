// Zadanie 1

function Tree(name) {
    this.type = name;
}

// Na przyszłość: nie stosować języka polskiego w kodzie, taki nawyk sobie budować.
var jodla = new Tree('jodla');
var modrzew = new Tree('modrzew');

console.dir(jodla);
console.dir(modrzew);

// W treści zadania było, że ta funkcja ma ***zwracać*** tekst.
// A ta funkcja nie zwraca żadnego tekstu, zwraca `undefined`.
// Niby detal, ale zauważ, że słowo "zwracanie" jest szczególnym słowem
// i wskazuje na konieczność użycia słowa kluczowego "return".
// Wypisane czegoś do konsoli poprzez `console.log` jest tylko side effectem
// i nie wpływa na zwracaną wartość.
// Może autorowi zadania chodziło jednak o `console.log`,
// ale jeśli tak, to wyraził się nieprecyzyjnie.
Tree.prototype.bloom = function() {
    console.log('I am blooming');
};

console.dir(Tree);
