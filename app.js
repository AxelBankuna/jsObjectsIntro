const Person  = require('./Person.js')

let person_1 = new Person("Adam", 100)
let person_2 = new Person("Eve", 50)
let person_3 = new Person("Abel", 25)

for (let i = 0; i < 2; i++){
    for (let j = 0; j < Person.Array.length; j++) {
        Person.Array[j].saySomething();
    }
}