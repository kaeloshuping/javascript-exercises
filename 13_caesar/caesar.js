const caesar = function(text, shift) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let encodedText = "";
    shiftAmount = parseInt(shift % 26, 10);
    for (let letter of text.toLowerCase()) {
        if (!(letters.includes(letter))) {
            encodedText += letter;
        }
        else {
            let position = letters.indexOf(letter);
            let newPosition = position + shiftAmount;
            if (newPosition > 25) {
                newPosition -= 26;
                encodedText += letters[newPosition];
            }
            else if (newPosition < 0) {
                newPosition += 26;
                encodedText += letters[newPosition];
            }
            else {
                encodedText += letters[newPosition];
            };
        };
    };
    return titleCase(encodedText);
};

function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    };
    finalString = str.join(" ");
    return finalString;
};

// Do not edit below this line
module.exports = caesar;
