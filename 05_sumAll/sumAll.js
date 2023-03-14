const sumAll = function(...args) {
    // create variable to hold final sum
    let sum = 0

    // get maximum value from "...args"
    let maxNumber = Math.max(...args)

    // get minimum value from "...args"
    let minNumber = Math.min(...args)
    console.log(maxNumber)
    console.log(minNumber)
    console.log(Number.isInteger(maxNumber))
    if (Number.isInteger(minNumber) && Number.isInteger(maxNumber)) {
        // loop through values between minNumber and maxNumber
        for (let i = minNumber; i <= maxNumber; i++) {
            // add numbers to sum
            sum += i
        }
    }
    else if (maxNumber < 0 || minNumber < 0) {
        return "ERROR"
    } 
    else {
        return "ERROR"
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
