console.log("hello world")
capitalize = (word) => {
    console.log(typeof word)
    if(typeof word == "string" ) {
        console.log("in Line 5")
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
    if (typeof word === 'object') return -5
    console.log("reached EOF")
    return word
}

reverseString = (word) => {
    if (typeof word == "number") word = String(word)
    if (typeof word == "string"){
        let reverseWord = []
        let count = 0
        for (let i=word.length-1; i>-1; i--) {
            reverseWord[count] = word[i]
            count ++ 
        }
        return reverseWord.toString().replaceAll(",","")
    }
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

module.exports = {capitalize, reverseString}