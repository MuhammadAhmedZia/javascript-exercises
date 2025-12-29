
const removeFromArray = function(arr, ...itemsToRemove) {
    let newArray = [];
    arr.forEach(el => {
        if(!itemsToRemove.includes(el)){
            newArray.push(el)
        }
    });
    return newArray;
    // return arr.filter(items  => !itemsToRemove.includes(items));
};


// const removeFromArray = function(arr, ...itemsToRemove) {
//     // Advance Method
//     return arr.filter(items  => !itemsToRemove.includes(items));
// };

let result = removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
 result = removeFromArray(["apple", "banana", 4,"cherry"],"banana",4)
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
