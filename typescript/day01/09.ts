import Person from './08'
class Student extends Person{
    skill:string;
    constructor(name:string,age:number,skill:string){
        super(name,age);
        this.skill=skill
    }
}
var s:Student=new Student("zhang",20,"lol")
s.getName()