module.exports = class Person{
    constructor(name, age) {
        if (!Person.Array)
            Person.Array = [];

        this.name = name;
        this.age = age;
        Person.Array.push(this);
    }

    saySomething(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}
