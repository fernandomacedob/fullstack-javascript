const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli" ]
console.log(arr)

// Add elements
// push
let size = arr.push("Boromir")
console.log(arr)
console.log(size)

// Put on a new element in the index 0
// unshift
size = arr.unshift("Test")
console.log(arr)
console.log(size)

// Remove the last element
// pop
let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// Remove the first element
// shift
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// Searching for an element
// includes
const include = arr.includes("Gandalf")
console.log(include)

// indexOf
const index = arr.indexOf("Gandalf")
console.log(index)

// Cut and Concatenate
// slice
const hobbits = arr.slice(2, 5)
const others = arr.slice(-4)
console.log(hobbits)
console.log(others)

