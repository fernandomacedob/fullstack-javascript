const apts = []

let option = ""

do {
    option = prompt(
        "Welcome to the Property Registration\n" +
        "Total of Appartments: " + apts.length +
        "\n\n1. New appartment\n2. Appartments List\n3. Exit"
    )

    switch (option) {
        case "1":
            const apt = {}

            apt.owner = prompt("Type the owner name of the property: ")
            apt.rooms = prompt("How many rooms?")
            apt.baths = prompt("How many bathrooms?")
            apt.garage = prompt("Does the property have a garage? (Yes/No)")

            const check = confirm(
                "Save this property?\n"+
                "\nOwner: " + apt.owner +
                "\nRooms: " + apt.rooms +
                "\nBathrooms: " + apt.baths +
                "\nDoes it have garage? " + apt.garage
            )

            if(check) {
                apts.push(apt)
                alert("Property saved!")
            } else {
                alert("Back to the menu")
            }

            break;

        case "2":
            for (let i = 0; i < apts.length; i++) {
                alert(
                    "Property: " + (i + 1) + 
                    "\n\nOwner: " + apts[i].owner +  
                    "\nRooms: " + apts[i].rooms +  
                    "\nBathrooms: " + apts[i].baths +  
                    "\nGarage: " + apts[i].garage
                )
            }

            break;

        case "3":
            alert("Exiting...")
            break;

        default:
            alert("Invalid option! Please, choose option 1, 2 or 3!")
            break;
    }

} while (option !== "3");