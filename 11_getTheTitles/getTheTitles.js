const getTheTitles = function(array) {
    let titles = [];
    for (i in array) {
        titles.push(array[i]["title"]);
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
