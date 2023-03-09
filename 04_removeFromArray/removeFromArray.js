const removeFromArray = function(array, toRemove1, toRemove2) {
    let newArray = []
    for (let i of array) {
        if (i === toRemove1 || i === toRemove2) {
            continue
        }
        else {
            newArray.push(i)
        };
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


// def remove_item(list, item):
//     new_list = []
//     for i in list:
//         if i == item:
//             continue    
//         else:
//             new_list += i