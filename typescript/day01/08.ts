//private  私有的 作用范围只在类中
//public   共有的，其它类也可以访问
//不写默认共有的
class Person{
    //类的一个属性
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    getName():void{
        console.log(this.name)
    }
}
// var p:Person=new Person("cheng",20)
// console.log(p)
export default Person;