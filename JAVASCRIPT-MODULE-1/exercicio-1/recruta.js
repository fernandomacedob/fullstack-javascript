let firstName 
let lastName 
let studyField
let yearOfBirth

firstName = prompt("Type your First Name: ")
lastName = prompt("Type your Last Name: ")
studyField = prompt("Type your Study of Field: ")
yearOfBirth = prompt("Type your year of birth: ")

console.log(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + firstName + " " + lastName+
    "\nCampo de Estudo: " + studyField+
    "\nIdade: " + (2026 - yearOfBirth)
)
