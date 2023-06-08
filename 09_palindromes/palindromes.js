const palindromes = function (string) {
    filteredString = string.toLowerCase().replace(/[^a-z]/g, "");
    stringArray = filteredString.split("");
    reversedArray = stringArray.reverse();
    finalString = reversedArray.join("");
    if (finalString === filteredString) {
        return true;
    }
    else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
