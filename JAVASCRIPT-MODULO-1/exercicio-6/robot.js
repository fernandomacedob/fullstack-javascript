let num = prompt("Type a number:")

let result = ""

for(let i = 0; i <= 10; i++) {
    result += "\n"+num + " * " + i + " = " + (num * i) 
}

console.log(`Multiplication of the number ${num}`,result)