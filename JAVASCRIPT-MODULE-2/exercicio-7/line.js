let line = []
let option = "" 

do {
    let patients = ""

    for (let i = 0; i < line.length; i++) {
        patients += (i + 1) + "º - " + line[i] + "\n"
    }

    option = prompt(
        "Patients:\n" + patients + 
        "\nChoose a option:\n1. New patient\n2. Consult patient\n3. Exit"
    )

    switch (option) {
        case "1":
            const newPatient = prompt("What's the patient name?")
            line.push(newPatient)
            break;

        case "2":
            const patientConsulted = line.shift()
            if (patientConsulted) {
                alert(patientConsulted + " was removed of the line.")
            } else {
                alert("There's no patients in the line.")
            }
            
            break;

        case "3":
            alert("Exiting...")
            break;

        default:
            alert("Invalid option")
            break;
    }

} while (option !== "3");