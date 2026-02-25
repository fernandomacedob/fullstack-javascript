function calcAverage(a, b) {
    const average = (a + b) / 2
    return average
}

const result = calcAverage(10, 2)

console.log(result)

function productCreate(name, price) {
    const product = {
        name, // name: name
        price, // price: price
        storage: 1
    }

    return product
}

console.log(productCreate("Notebook Intel Core i3 8GB", 2500))

function rectangularArea(base, height) {
    return base * height
    
}

console.log(rectangularArea(3, 5))

function squareArea(side) {
    return rectangularArea(side, side)
}

console.log(squareArea(9))

function hi() {
    let text = "..."
    return text
    text = "Hello, world!" // Unreachable code detected
    console.log(text) // Unreachable code detected
}

console.log(hi())

function majority(age) {
    if(age >= 18) {
        return "It's adult"
    } else {
        return "Kid or Teenager"
    }
}

console.log(majority(29))
console.log(majority(13))