"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const showResult = true;
console.log(typeof number1);
const resultPhrase = 'Result is: ';
console.log(add(number1, number2, showResult, resultPhrase));
