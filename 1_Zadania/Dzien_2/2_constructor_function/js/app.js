// Zadanie z wykładowcą

function Basket() {
    this.products = [],
    this.sum = 0,
    this.addProduct = function(name, price) {
        var product = [name, price];
        this.products.push(product);
        this.sum += price;
    },
    this.showBasket = function() {
        console.log("Basket summary:");
        for (i=0; i<this.products.length; i++) {
            var product = this.products[i];
            var productName = product[0];
            var productPrice = product[1];
            console.log('Product: ' + productName + ' Price: ' + productPrice);
        }
        console.log('Total price: ' + this.sum);
    }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();

