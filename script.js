console.log("hello world")
capitalize = (word) => {
    let firstLetter = word[0].toUpperCase()
    let newWord = ""
    newWord = newWord + firstLetter
    for (let letter of word) {
        if (!(letter === `${word[0]}`)) {
            newWord = newWord + letter
        }
    }
    return newWord
}

reverseString = (word) => {
    let reverseWord = []
    let count = 0
    for (let i=word.length-1; i>-1; i--) {
        reverseWord[count] = word[i]
        count ++ 
    }
    return reverseWord.toString().replaceAll(",","")
}

class Calculator {
    constructor() {
    }
    add (x, y) {
        return x + y
    }

    divide (x,y ) {
        return x/y
    }
    multiply (x,y ) {
        return x*y
    }
}

module.export = {capitalze, reverseString}