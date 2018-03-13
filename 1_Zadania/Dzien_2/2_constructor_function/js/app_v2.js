function Basket() {
    this.products = [],
    this.sum = 0
}

var aliceBasket = new Basket();

Basket.prototype.addProduct = function(name, price) {
    var product = [name, price];
    this.products.push(product);
}

Basket.prototype.showBasket = function() {
    console.log("Zakupione produkty");
    for (var i = 0; i<this.products.length; i++) {
        console.log('Produkt: ' + this.products[i][0] + ', cena: ' + this.products[i][1]);
        this.sum += this.products[i][1];
    }
    console.log('Suma: ' + this.sum);
}

aliceBasket.addProduct('pomidor',10);
aliceBasket.addProduct('jalbko',20);
aliceBasket.showBasket();
aliceBasket.addProduct('jalbko',20);
aliceBasket.showBasket();
// console.dir(aliceBasket);
