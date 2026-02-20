const deck = []
let option = ""

do {
    option = prompt(
        "Cards in the deck: " + deck.length +
        "\n1. Add a card\n2. Pull a card\n3. Exit"
    )

    switch (option) {
        case "1":
            const newCard = prompt("Enter the card to add:")
            deck.push(newCard)
            alert("Card added: " + newCard)
            break

        case "2":
            if (deck.length > 0) {
                const pulledCard = deck.pop()
                alert("You pulled: " + pulledCard)
            } else {
                alert("The deck is empty!")
            }
            break

        case "3":
            alert("Exiting the program.")
            break

        default:
            alert("Invalid option. Please choose 1, 2, or 3.")
    }

} while (option !== "3")