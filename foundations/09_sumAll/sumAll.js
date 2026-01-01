const sumAll = function(min, max) {
    if(!Number.isInteger(min) || Number.isInteger(max)) return "Error"
    if (min < 0 || max < 0) return "Error"

    let sum = 0;
    let start = Math.min(min, max);
    let end = Math.max(min, max);
    for (let i= start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};
console.log(sumAll(1,4));
console.log(sumAll(10,4));
console.log(sumAll(1,-4));

// let a =10;
// let b = 1;
// s = 0;
// for (let i = a; i <= b; i++) {
//     s += i;
//     console.log(s);
    
// }

// console.log(s);


// Do not edit below this line
// module.exports = sumAll;
