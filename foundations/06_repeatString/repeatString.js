const repeatString = function(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
        
    }
    return result    
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
