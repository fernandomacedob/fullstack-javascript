let option = "e"

do {

    const option = prompt(
        `Choose one of the options below:
Option A: 
Option B: 
Option C: 
Option D: 
    
Encerrar`
    )

    switch (option.toLowerCase()) {
        case "a":
            alert(`Option A was chose`)
            break

        case "b":
            alert(`Option B was chose`)
            break

        case "c":
            alert(`Option C was chose`)
            break

        case "d":
            alert(`Option D was chose`)
            break

        case "e":
            alert(`You chose finishing the program.`)
            alert(`Finishing...`)
            break

        default:
            alert(`Invalid option`)
            break
    }

} while (option !== "e");


