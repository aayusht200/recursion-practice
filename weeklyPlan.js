// Day 1 — Basics
// Goal: Understand base case + recursive step.
// Tasks:
// - Write factorial
// - Write reverse string
// - Trace both on paper (show call stack)

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));

function revStr(str) {
    if (str.length === 1) return str;
    return str.slice(-1) + revStr(str.slice(0, -1));
}
console.log(revStr('Hello'));

// ## Day 2 — Arrays
// Goal: Learn recurring over sequences.
// Tasks:
// - Sum all numbers in an array
// - Count how many times a value appears
// - Flatten a nested array (simple version)

function sumNum(arr) {
    if (arr.length === 1) return arr[0];
    return arr[arr.length - 1] + sumNum(arr.slice(0, arr.length - 1));
}

function countValue(arr, value) {
    let count = 0;
    if (arr.length === 0) return 0;
    if (arr[arr.length - 1] === value) {
        count = 1 + countValue(arr.slice(0, arr.length - 1), value);
    } else count = countValue(arr.slice(0, arr.length - 1), value);
    return count;
}
console.log(sumNum([1, 4, 5, 7, 9]));
console.log(countValue([1, 3, 3, 5], 3));

function flattenArr(arr) {
    if (arr.length === 0) return [];
    if (typeof arr[0] === 'number') {
        return [arr[0], ...flattenArr(arr.slice(1))];
    } else return [...flattenArr(arr[0]), ...flattenArr(arr.slice(1))];
}

console.log(flattenArr([1, [2, [3, 4], 5], 6]));
