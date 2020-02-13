// function getData<T>(value:T){
//     console.log(value)
// }
// getData<string>("hello")
// getData<number>(123)

class Person<T>{
    print(msg:T){
        console.log(msg)
    }
}
class Student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
var p=new Student("cheng",20);
var son=new Person<string>();
son.print("hello")
var li=new Person<Student>()
li.print(p);