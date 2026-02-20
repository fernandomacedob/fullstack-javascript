const car1 = prompt("Type the name of the car1 vehicle:")
const v1 = parseFloat(prompt("Type the speed of the car1"))

const car2 = prompt("Type the name of the car2 vehicle:")
const v2 = parseFloat(prompt("Type the speed of the car2"))

if (v1 > v2) {
    alert(car1 + " is faster than " + car2)
} else if (v1 < v2) {
    alert(car2 + " is faster than " + car1)
} else {
    alert(car1 + " and " + car2 + " have the same speed.")
}