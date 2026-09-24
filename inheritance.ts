class User {
    private _name:string
    private _age:number
    private _email:string

    constructor(name:string, age:number, email:string){
        this._name = name
        this._age = age
        this._email = email
    }
    get age () {
        return this._age
    }
    set age(value:number){
        if(value < 0 || value > 100) {
            throw new error("Age is not Valid");
            
        }
        this._age = value
    }
}
class Student {
    private _name:string = "Nayon"
    private _email:string = "nayon@gmail.com"
    private _age:number = 23
    private _marks:number =100
}
const createStudent = (name:string, age:number, email:string, marks:number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.marks = marks;
};
class Student extends User {
constructor(name:string, age:number, email:string, fee:number){
    super(name, age, email)
    this._fee = fee
}
}
const Student = new Student ("Nayon", 15, "nayon@gmail.com")
console.log(Student)
//const user = new User("Labib", 23, "labib@gmail.com");
//user.age = 30
//console.log(user.age)