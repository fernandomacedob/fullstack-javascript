let option = 3
let money = parseFloat(prompt("Type the money amount: "))

do {

    option = parseInt(prompt(
        
        `Amount: CAD$ ${money}\n\nChoose one of the options below:\n1 - Deposit: \n2 - Withdraw: \n3 - Close:`
    ))

    switch (option) {
        case 1:
            amount = parseFloat(prompt(`How much would you like to deposit?`))
            money += amount
            alert(`You deposited ${amount} and now you have ${money}`)
            break

        case 2:
            amount = parseFloat(prompt(`How much would you like to withdraw?`))
            money -= amount
            alert(`You withdrew ${amount} and now you have ${money}`)
            break

        case 3:
            alert(`You chose finishing the program.`)
            alert(`Finishing...`)
            break

        default:
            alert(`Invalid option`)
            break
    }

} while (option !== 3);


