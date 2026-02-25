function sum(a, b) {
    return a + b
}

let operations = sum

console.log(operations(7, 5))

operations = function (a, b) {
    return a - b
}

console.log(operations(7, 5))