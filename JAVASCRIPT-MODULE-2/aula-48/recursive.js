function divide(num) {

    console.log(num)

    if (num % 2 === 0) {
        divide(num / 2)
    } else {
        return num
    }
}

// divide(1024)

function double(num) {
    console.log(double)
    double(num * 2)
}

// double(1)

function factorial(num) {
    console.log("Number: " + num)

    if (num === 0) { // base case
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num -1))
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))