function countdown(num) {
    console.log(`countdown`);
    if (num === 1) return 1;
    console.log(num);
    return countdown(num - 1);
}

function sumNum(num) {
    if (num === 0) return 0;
    return num + sumNum(num - 1);
}

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

function lengthArr(arr) {
    if (arr.length === 1) return 1;
    arr.pop();
    return 1 + lengthArr(arr);
}

function sumArr(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArr(arr.slice(1));
}

function maxNumArr(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = maxNumArr(arr.slice(1));
    if (arr[0] > maxOfRest) return arr[0];
    else return maxOfRest;
}

function countEven(arr) {
    if (arr.length === 1) {
        if (isEven(arr[0])) return 1;
        else return 0;
    }
    if (isEven(arr[0])) return 1 + countEven(arr.slice(1));
    else return countEven(arr.slice(1));
}
function isEven(num) {
    return num % 2 === 0;
}

function flatArr(arr) {
    if (arr.length == 0) return [];
    if (typeof arr[0] == 'number') {
        return [arr[0], ...flatArr(arr.slice(1))];
    } else {
        return [...flatArr(arr[0]), ...flatArr(arr.slice(1))];
    }
}

function revStr(arr) {}

let arr = [1, 2, 3, 4, 5, 6];
let sumarr = [1, 2, 3, 4, 5, 6];

console.log(countdown(5));
console.log(`Sum of numbers 5-1: ${sumNum(5)}`);
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Length of ${arr} :  ${lengthArr(arr)}`);
console.log(`Sum of ${sumarr} :  ${sumArr(sumarr)}`);
console.log(`Max number from [7, 71, 2, 3, 24, 85, 6]:${maxNumArr([7, 71, 2, 3, 24, 85, 6])}`);
console.log(`Number of even elements [7, 71, 2, 3, 24, 85, 6, 9, 10]:${countEven([7, 71, 2, 3, 24, 85, 6, 9, 10])}`);
console.log(`Flattned Arr[1, [2, [3, 4], 5], 6]:${flatArr([1, [2, [3, 4], 5], 6])}`);
