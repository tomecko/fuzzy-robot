// Zadanie 1

function Tree(name) {
    this.type = name;
}

var jodla = new Tree('jodla');
var modrzew = new Tree('modrzew');

console.dir(jodla);
console.dir(modrzew);

Tree.prototype.bloom = function() {
    console.log('I am blooming');
};

console.dir(Tree);