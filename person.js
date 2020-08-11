class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${name} and I'm ${age}`)
    }
}

module.exports = Person;