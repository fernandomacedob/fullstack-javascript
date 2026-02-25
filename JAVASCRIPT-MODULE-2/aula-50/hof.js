function calculate(a, b, operation) {
    console.log("Doing an operation.")
    const result = operation(a, b)
    return result
}

function sum(x, y) {
    console.log("Doing a sum.")
    return x + y
}

console.log(calculate(3, 5, sum))

console.log(calculate(8, 4, function (x, y) {
    console.log("Doing a subtraction.")
    return x - y
}))

function showElements(element, index, array) {
    console.log({
        element,
        index,
        array
    })
}

const list = ['Maçã', 'Banana', 'Laranja', 'Limão']

// for (let i = 0; i < list.length; i++) {
//     showElements(list[i], i, list)
// }

list.forEach(showElements)

list.forEach(function (element, index, array) {
    console.log({
        element,
        index,
        array
    })
})