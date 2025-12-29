const reverseString = function(str) {
    let rev = "";
    for (let i = str.length-1 ;i >= 0; i--) {
        rev += str[i];
        console.log(rev,i);
                
    }
    return  rev;
};
console.log(reverseString("hello"));


// Do not edit below this line
module.exports = reverseString;
