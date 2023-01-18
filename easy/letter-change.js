export const letterChange = (str) => {

    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === "z") {
            return "a"
        }else{
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char => char.toUpperCase())

    return vowelCapitalize
}


/*
Using the Javascript, have the function letterChange(str) take the str parameter being passed and modify it using the following algorithm.

1-) Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).

2-) Then capitallize every vowel in this now string (a, e, i, o, u) and finally return this modified string.

*/