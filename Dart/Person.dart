class Person {
  String name;
  int age;
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  String skill;
  Student(String name, int age, this.skill) : super(name, age);
}
