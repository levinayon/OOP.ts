class Student {
    name:string = "Nayon"
    email:string = "nayon@gmail.com"
    age:number = 23
    marks:number =100
};
const nayon = new Student ()
console.log(nayon)

class Student {
    email:string
    age:number
    marks:number
}

const nayon = new Student()
const neel = new Student()
console.log(neel)

const createStudent = (name:string, age:number, email:string, marks:number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.marks = marks;
};
