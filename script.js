console.log("hello world")
capitalize = (word) => {
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

// class Calculator {
//     constructor() {
//     }
//     add (x, y) {
//         return x + y
//     }

//     divide (x,y ) {
//         return x/y
//     }
//     multiply (x,y ) {
//         return x*y
//     }
// }

// ES5 class
function Calculator() {
}

Calculator.prototype.add = function (x, y) {
    if (typeof X != "number" || typeof y != "number") {
        x = Number(x)
        y = Number(y)
    }
    return x + y;
};

Calculator.prototype.divide = function (x, y) {
    if (typeof X != "number" || typeof y != "number") {
        x = Number(x)
        y = Number(y)
    }
    return x / y;
};

Calculator.prototype.multiply = function (x, y) {
    if (typeof X != "number" || typeof y != "number") {
        x = Number(x)
        y = Number(y)
    }
    return x * y;
};
Calculator.prototype.subtract = function (x, y) {
    if (typeof X != "number" || typeof y != "number") {
        x = Number(x)
        y = Number(y)
    }
    return x- y;
};

const Calc = new Calculator()

module.exports = {capitalize, reverseString, Calc}