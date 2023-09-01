const capitalize = require("./script.js")
const reverseString = require("./script.js")
it ('Not given a string format', () => {
    expect(capitalize(hossam)).toBe("Hossam")
})
it ('Not given a text of any format', () => {
    expect(capitalize(1234)).toBe("1234")
})
it ('not Reversing string', () => {
    expect(reverseString("Joe")).toBe("eoJ")
})
it ('not given a string', () => {
    expect(reverseString(Joe)).toBe("eoJ")
})
it ('not given a string of any format', () => {
    expect(reverseString(2563)).toBe("3652")
})