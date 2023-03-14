const removeFromArray = function(...args) {
    let newArray = []
    for (let i of args[0]) {
        if (args.includes(i)) {
            continue
        }
        else {
            newArray.push(i);
            continue
        };
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
