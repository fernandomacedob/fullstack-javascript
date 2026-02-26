function triangle() {
    const base = prompt("Type the base: ")
    const height = prompt("Type the height: ")
    return base * height / 2
}

function rectangle() {
    const base = prompt("Type the base: ")
    const height = prompt("Type the height: ")
    return base * height
}

function square() {
    const side = prompt("Type the side: ")
    return side * side
}

function trapezius() {
    const baseBig = parseFloat(prompt("Type the bigger base: "))
    const baseSmall = parseFloat(prompt("Type the smaller base: "))
    const height = prompt("Type the height: ")
    return (baseBig + baseSmall) * height / 2
}

function pi() {
    const ray = prompt("Type the bigger base: ")
    return (3.14 * ray * ray)

}

function showMenu() {
    return prompt(
        "Welcome to the Calculator" +
        "\n\nPlease, choose one of the options below:" +
        "\n\n1. Calculate the triangle area" +
        "\n2. Calculate the rectangle area" +
        "\n3. Calculate the square area" +
        "\n4. Calculate the trapezius area" +
        "\n5. Calculate the circle area" +
        "\n6. Exit"
    )
}

function execute() {
    let option = ""

    do {
        option = showMenu()
        let result

        switch (option) {
            case "1":
                result = triangle()
                break

            case "2":
                result = rectangle()
                break

            case "3":
                result = square()
                break

            case "4":
                result = trapezius()
                break

            case "5":
                result = pi()
                break

            case "6":
                alert("Exiting...")
                break

            default:
                alert("Invalid option! Please, choose between 1 to 6 numbers")
                break;
        }

        if(result) {
            alert("Result: " + result)
        }

    } while (option !== "6");
}

execute()




