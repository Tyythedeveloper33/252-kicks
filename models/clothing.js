class Clothing {
    constructor(name, price, category, image) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
}

class Shirts extends Clothing {
    constructor(name, price, category, image) {
        super(name, price, category, image);
    }
}

module.exports = { Clothing, Shirts };

