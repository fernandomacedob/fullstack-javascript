const arr = [
    "1º Level",
    ["2º Level", 42, true],
    [
        ["3º Level, 1º item","Olá, mundo!",],
        ["3º Level, 2º item","Oi, mundo!",],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1][0])
console.log(arr[2][1][0])

const matrix = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

// console.table(matrix)

// matrix.push("New line")
// matrix[0].push("New column")

// console.table(matrix)

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];
        console.log("Position: (" + i + ", " + j + ") Valor: " + element)
    }
}