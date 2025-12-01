function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergedArr(left, right);
}
function mergedArr(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    if (i < left.length) result.push(...left.slice(i));
    if (j < right.length) result.push(...right.slice(j));
    return result;
}

console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([73]));
console.log(mergeSort([]));
