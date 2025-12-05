class Product{
    constructor(name , price){ // every class has a constructor
        this.name = name;
        this.price = price;
    } 

        displayProduct(){ //inside a class we dont need a function keyword
            console.log(`Product ${this.name}`);
            console.log(`Price ${this.price}`);
        }
}

// const newProduct = new Product('Shirt', 20);
// const newProduct2 = new Product('Pant', 40);
// newProduct.displayProduct();
// newProduct2.displayProduct();


class Rectangle{
    constructor(length , width , colour){
        this.length = length;
        this.width = width;
        this.colour = colour;
        console.log("this is only ran once when the object is being created");
    }
    area(){
        return this.length * this.width;
    }
}

const obj = new Rectangle(23, 4 ,'red');
console.log(obj.area());


// STATIC METHODS
class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    static equals(a,b){ // here a and b are 2 different square instances 
        return  a.width * a.height === b.width * b.height;
    }
    static isValid(width , height){
        return width === height;
    }
}
    

const sq = new Square(5);
const sq2 = new Square(3);
console.log(sq);
console.log(Square.equals(sq , sq2)); // here we have to call the static function on the class and not the instances of the class
console.log(Square.isValid(sq , sq2));
