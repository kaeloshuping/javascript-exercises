const findTheOldest = function(array) {
    ageArray = []
    for (let person of array) {
        if (person["yearOfDeath"] === undefined) {
            currentDate = new Date()
            currentYear = currentDate.getFullYear();
            ageDifference = currentYear - person["yearOfBirth"];
            ageArray.push(ageDifference);
        }
        else {
            ageDifference = person["yearOfDeath"] - person["yearOfBirth"];
            ageArray.push(ageDifference);
        };
    };
    eldest = Math.max(...ageArray);
    eldestIndex = ageArray.indexOf(eldest);
    return array[eldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
