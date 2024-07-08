class Clothing {

    constructor(name, price, category, image) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image

    }

}

class Shirts extends Clothing {
    constructor(price, category){
        super( price, category)
    }
}









module.exports = Clothing
