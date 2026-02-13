const word = prompt("Type a word:")
let invertedWord = ""

for (let i = word.length -1; i >= 0 ; i--) {
    invertedWord += word[i]
}

if (word === invertedWord) {
    console.log(word + " it's a palindrome ")
} else {
    console.log(word + " it's not a palindrome ")
    console.log(word + " !== " + invertedWord)
}

