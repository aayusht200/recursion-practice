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
    if (str.length == 1) return str;
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
    if (arr.length === 0) return 0;
    return arr[0] + sumNum(arr.slice(1));
}

function countValue(arr, value) {
    let count = 0;
    if (arr.length === 0) return 0;
    if (arr[0] === value) count++;
    return count + countValue(arr.slice(1), value);
}

function flattenArr(arr) {
    if (arr.length == 0) return [];
    if (typeof arr[0] === 'number') return [arr[0], ...flattenArr(arr.slice(1))];
    return [...flattenArr(arr[0]), ...flattenArr(arr.slice(1))];
}

console.log(sumNum([1, 4, 5, 7, 9]));
console.log(countValue([1, 3, 3, 3, 5], 3));
console.log(flattenArr([1, [2, [3, 4], 5], 6]));

// ## Day 3 — Objects
// Goal: Handle nested objects.
// Tasks:
// - Get total number of keys in a nested object
// - Find a key inside a deeply nested object

function countKeys(data) {
    let count = 0;
    if (Object.keys(data).length === 0) return 0;
    let [firstKey, firstData] = Object.entries(data)[0];
    console.log(typeof firstData);

    // if (typeof firstData === 'object') console.log(firstData);
}

let data = {
    id: 101,
    profile: {
        personal: {
            first: 'Aayush',
            last: 'T',
        },
        education: {
            degree: 'BCA',
            year: 2024,
        },
    },
    status: 'active',
};
countKeys(data);
// Object.entries(data).forEach((ele) => {
//     console.log(typeof ele);
// });
