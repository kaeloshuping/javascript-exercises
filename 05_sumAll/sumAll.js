const sumAll = function(...args) {
    for (arg of args) {
        if (!Number.isInteger(arg)) {
            return "ERROR"
        }
    }
    // create variable to hold final sum
    let sum = 0

    // get maximum value from "...args"
    let maxNumber = Math.max(...args)

    // get minimum value from "...args"
    let minNumber = Math.min(...args)

    // check whether maximum number and minimum numbers are greater than 0 and return ERROR if not
    if (maxNumber < 0 || minNumber < 0) {
        return "ERROR"
    } 
    
    // if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber)) {
    //     return "ERROR"
    // }
    else {
        // loop through values between minNumber and maxNumber
        for (let i = minNumber; i <= maxNumber; i++) {
            // add numbers to sum
            sum += i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
