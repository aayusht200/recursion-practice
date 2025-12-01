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

function revStr(str) {
    if (str.length == 0) return '';
    return str.slice(-1) + revStr(str.slice(0, -1));
}
function fibSeries(num) {
    if (num == 0) return [];
    if (num == 1) return [0];
    let temp = [0, 1];
    for (let i = 2; i < num; i++) {
        temp.push(temp[i - 1] + temp[i - 2]);
    }
    return temp;
}
function recurFibSeries(num) {
    if (num == 0) return [];
    if (num == 1) return [0];
    if (num == 2) return [0, 1];
    const prev = recurFibSeries(num - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
}

function recursiveFib(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return recursiveFib(num - 1) + recursiveFib(num - 2);
}

function ittrativeFib(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    let prev = 0;
    let curr = 1;
    let next;
    for (let i = 2; i <= num; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
}

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
console.log(`Str Rev hello :${revStr('hello')}`);
console.log(`Fibonacci seq of 5 using itrative method: ${fibSeries(5)}`);
console.log(`Fibonacci seq of 5 using recursive method: ${recurFibSeries(5)}`);
console.log(`Fibonacci number 5 using recursive method: ${recursiveFib(5)}`);
console.log(`Fibonacci number 5 using itrative method: ${ittrativeFib(5)}`);
