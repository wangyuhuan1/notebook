//接口
interface Animal{
    name:string;
    eat():any;
    run():any;
}
class Dog implements Animal{
    name:string
    eat():void{
        console.log("吃骨头")
    }
    run():void{
        console.log("狗跑")
    }
}