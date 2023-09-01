// test.js
const script = require("../script.js");
const capitalize = script.capitalize;
const reverseString = script.reverseString;
const Calculator = script.Calc
console.log(Calculator)

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

// testing calculator
it("calculator.add not given a number", () => {
    expect(Calculator.add(12, "6")).toBe(18)
})
it("calculator.subtract not given a number", () => {
    expect(Calculator.subtract("12", 6)).toBe(6)
})
it("calculator.multiply not given a number", () => {
    expect(Calculator.multiply(12, "6")).toBe(72)
})
it("calculator.divide not given a number", () => {
    expect(Calculator.divide("12", 6)).toBe(2)
})