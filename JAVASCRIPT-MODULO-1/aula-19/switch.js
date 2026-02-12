const result = prompt(
    "Choose an option:"+
    "\na)"+
    "\nb)"+
    "\nc)"
    )

const numberResult = parseFloat(result)

switch (numberResult) {
    case 1:
        alert("The result is 'a'")
        break;

    case 2:
        alert("The result is 'b'")
        break;

    case 3:
        alert("The result is 'c'")
        break;

    default:
        alert("Finishing...")
        break;
}