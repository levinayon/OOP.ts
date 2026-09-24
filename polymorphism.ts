class Animal {
    private _name;

    constructor(name:string) {
        this._name = name
    }
    makeSound():void {
        console.log("Animal can make sound")
    }
}
class Cat extends Animal {

}
const cat = new Cat("Billu")
cat.makeSound();

class Circle extends Shape {
    radius:number
    constructor(radius:number){
        super()
        this.radius = radius
    }
    area(): number {
        return 3.1416 * this.radius * this.radius
    }
}
console.log(Circle.area())