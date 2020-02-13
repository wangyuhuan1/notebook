## Dart的数据类型

```
Number  int,double
String
Booleans
List
Map
```

## 一、入口方法(和Java类似)

```dart
void main(){
    print("hello world")
}
```

## 二、变量

#### 2-1 不指明类型

```dart
void main(){
  var b = 20;
  print(b)
}
```

#### 2-2 指明类型

```dart
void main(){
  int a= 10;
  double d = 10.432423;
  bool b = true;
  String str = "hello world";
  print(a);
}
```

## 三、常量

```
void main(){
  const int a = 10;
  final b = 20;
}
```

## 四、Map,List

```js
void main(){
    Map obj = {"name":"cheng","age":20};
    List arr = [1,2,3];
    print(obj["name"]);
}
```

## 五、字符串中使用变量

```dart
void main(){
    var s = "hello";
    var t = "$s world";
    print(t);
}
```

## 六、List

``` dart
1.增加
- add() 向后添加
- insert(index,element) 
- length  //属性可以获取List的长度
2.删除
- remove(element) //移除某个元素
- removeAt(index) //删除对应下标的元素
- removeLast() //删除最后一位元素
- removeRange(start,end) //范围删除
- removeWhere() //根据条件删除

void main(){
    List<String> arr = ["html","css","javascript","vue"];
    arr.removeWhere((item){
      return item =="html";
    });
    print(arr);
}
```

```dart
3.修改
- setRange(start,end,list) //修改几个就传几个值 范围修改

void main(){
    List<String> arr = ["html","css","javascript","vue"];
    arr.setRange(0, 2, ["react","angular"]);
    print(arr);
}
- replaceRange(start,end,list) //范围替换,可以不传固定的位数
void main(){
    List<String> arr = ["html","css","javascript","vue"];
    arr.replaceRange(1, 3, ["react"]);
    print(arr);
}
```

```
4.查询
- indexOf() //读取元素的下标值
- contains() //判断是否包含某个元素
```



```dart
5.遍历
- forEach
- every
- any  //相当于javascript中的some
- map  //返回一个Iterable
void main(){
    List<String> arr = ["html","css","javascript","vue"];
    var b= arr.map((item){
      return item+"s";
	});
	print(b);
	print(b is List); //false
	print(b.toList());
}
```

```
6.其他
- join()
```

## 七、Set 集合

```dart
//特点:元素都是唯一的,无序
void main() {
  // 值是唯一的
  var arr = {"html","css","javascript","css"};
  print(arr);
  print(arr is Set);
}
```

```
- add
- List.from()   拷贝
```

```dart
void main() {
  // 值是唯一的
  var arr = {"html","css","javascript"};
  arr.add("react");
  // print(arr);
  // List
  var list = List.from(arr);
  print(list);
}

```

```dart
//List转换为Set
//set再转换为List
void main() {
  // 值是唯一的
  var arr = [1,2,3,2];
  var s = new Set();
  s.addAll(arr);
  print(s.toList());
}

```

## 八、Map

```dart
void main() {
  // 值是唯一的
  Map obj = {"name":"cheng","age":20};
  print(obj.keys.toList());
  print(obj.values.toList());
}

```

```
- remove() //删除某个属性
void main() {
  var obj = {"name":"cheng","age":20};
  obj.remove("name");
  print(obj);  //{"age":20}
}

```

```js
//js实现
var obj = {"name":"cheng","age":20,"sex":"男"};
delete obj.name;
console.log(obj);
```

```dart
--addAll()
void main() {
  var obj = {"name":"cheng","age":20};
  obj.addAll({"sex":"男"});
  print(obj); //{name: cheng, age: 20, sex: 男}
}

```

```
//遍历
--forEach
-- map//返回值必须mapEntry
void main() {
  var obj = {"name":"cheng","age":"20"};
  var m = obj.map((key,value){
    return new MapEntry(key,value+"s");
  });
  print(m); //{name: chengs, age: 20s}
}

```

## 九、函数

```dart
//1.没有返回值
void main(){
  void go(){
    print("hello world");
  }
}
```

```dart
//2.有返回值
void main(){
  String test(){
    return "good";
  }  
}
```

```dart
//3.泛型函数
void main(){
  T getData<T>(T value){
    return value;
  }
  getData<String>("hello world");
}
```

```dart
//函数的默认参数  以List的形式传递的
void main(){
  void getData([c,a="hello",b="good"]){
    print(a+b);
    print(c);
  }
  getData("world");
}
```

```dart
void main(){
  // 箭头函数 只能有一行代码
  void go()=>print("hello");
  go();

}
```

```dart
//自调函数 不带参数
void main(){
  ((){
    print("hello world");
  })();
}
```

```dart
//带参数的自调
void main(){
  ((n){
    print(n);
  })(10);
}
```

## 十、面向对象

```dart
class Person {
  String name;
  int age;
  // 构造函数就是构造一个对象的函数
  Person(String name,int age){
    this.name = name;
    this.age = age;
  }
}
```

```dart
//构造函数的简写
class Person {
  String name;
  int age;
  // 构造函数就是构造一个对象的函数
  Person(this.name,this.age);
}
```

#### 10-1 继承

```dart
class Person {
  String name;
  int age;
  // 构造函数就是构造一个对象的函数
  Person(this.name,this.age);
}
class  Student extends Person {
  String skill;
  Student(String name, int age,this.skill) : super(name, age);
}
```

```dart
import 'Person.dart';
void main(){
  // 实例化对象时,构造函数会自动触发
  Student s = new Student("cheng",20,"lol-code");
  print(s.skill);
}
```

