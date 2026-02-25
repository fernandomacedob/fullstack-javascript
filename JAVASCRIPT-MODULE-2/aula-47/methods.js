let person = {
    name: "Josefa",
    age: 26,

    sayHi() {
        console.log("Hello, world! My name is " + this.name)
    }
}

console.log(person)
person.sayHi()