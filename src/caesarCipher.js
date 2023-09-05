function caesarCipher(str, shift) {
    shift = Math.sign(shift)*(Math.abs(shift) % 26)
    let encodedStr = ''
    for (let i = 0; i < str.length; i++) {
        encodedStr += getEncodedChar(str.charAt(i), shift)
    }
    return encodedStr
}

// Unicodes:
// A-Z -> 65-90
// a-z -> 97-122
function getEncodedChar(char, shift) {
    let charUnicode = char.charCodeAt(0)
    if ((charUnicode < 65) ||
        (charUnicode > 90 && charUnicode < 97) ||
        (charUnicode > 122)) {
            return char
    }

    let adjustedCharUnicode = charUnicode + shift
    if (adjustedCharUnicode > 122 || (charUnicode <= 90 && adjustedCharUnicode > 90)) {
        adjustedCharUnicode -= 26
    } 
    if (adjustedCharUnicode < 65 || (charUnicode >= 97 && adjustedCharUnicode < 97)) {
        adjustedCharUnicode += 26
    } 

    return String.fromCharCode(adjustedCharUnicode)
}

export {caesarCipher}