const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

//   const names = []

//   for (let i = 0; i < personagens.length; i++) {
//     names.push(personagens[i].nome)
//   }

// const names = personagens.map(function (personagem) {
//     return personagem.nome
// })

// console.log(names)

// filter

//   const filter = []

//   for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         filter.push(personagens[i])
//     }
//   }

// const filter = personagens.filter(function (personagem) {
//     return personagem.raca === "Orc"
// })

// console.log(filter)

// Reduce

// const totalLevel = personagens.reduce(function (previousValue, personagem) {
//     return previousValue + personagem.nivel
    
// }, 0)

// console.log(totalLevel)

const race = personagens.reduce(function (previousValue, personagem) {
    if (previousValue[personagem.raca]) {
        previousValue[personagem.raca].push(personagem)
    } else {
        previousValue[personagem.raca] = [personagem]
    }
    return previousValue

}, {})

console.log(race)