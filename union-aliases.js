"use strict";
// Union types
// Most of the time you need to put in a logical check into your function in order to
// differentiate the use cases to get the expected output.
// Place the pipe symbol between the types that you are expecting
function combine(input1, input2, resultConversion
// We allow only these two values, this is to reduce mistakes with mistyping
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // }
    // return result.toString();
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as_text');
console.log(combinedNames);
