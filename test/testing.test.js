// test.js
const script = require("../script.js");
console.log(script)
const capitalize = script.capitalize;
const reverseString = script.reverseString;

it ('Not given a text of any format', () => {
    expect(capitalize(1234)).toBe(1234)
})
it ('not Reversing string', () => {
    expect(reverseString("Joe")).toBe("eoJ")
})
it ('not given a string of any format', () => {
    expect(reverseString(2563)).toBe("3652")
})
it ('not given a string of any format', () => {
    expect(reverseString(2563)).toBe("3652")
})