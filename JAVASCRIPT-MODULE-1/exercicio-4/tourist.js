const tourist = prompt("Type the name of the tourist:")
let answer = prompt("Have you visited any city? (Yes/No)")
let cities = ""
let cont = 0

while (answer.toLowerCase() === "yes") {
    let city = prompt("Type the name of the city you visited:")
    cities += "- " + city + "\n"
    cont++
    answer = prompt("Have you visited any other city? (Yes/No)")
}

alert(
    `Tourist: ${tourist}
Number of cities visited: ${cont}
Visited cities:\n${cities}`
)