function double(num) {
    console.log("The double of " + num + " is " + (num * 2));
}

double(40)
double(7)

function hi(name = "mundo!") {
    console.log("Hello, " + name)
}

hi("Isaac")
hi()

function sum(a, b) {
    console.log("Total is " + (a + b))
}

function sum1(a, b, c, d, e) {
    console.log("Total is " + (a + b + c + d + e))
}

sum(7, 6)
sum1(7, 6, 4, 1, 9)

function createUser(name, email, password, typeUser = "admin") {
    const user = {
        name, // same than name: name
        email,
        password,
        typeUser
    }

    console.log(user)
}

function newUser(name, typeUser = "admin", email, password) {
    const user = {
        name, // same than name: name
        email,
        password,
        typeUser
    }

    console.log(user)
}

createUser("Isaac", "isaac@mail.com", "1234")
// createUser("isac@mail.com", "Isaac", "1234")
newUser("Isaac", "isaac@mail.com", "1234")

function manyParameters(name, phone, address, birthday, email, password) {

}

function objectParameters(user) {
    user.name
    user.email
}

manyParameters("")

const userData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    birthday: "",
}

objectParameters(userData)
