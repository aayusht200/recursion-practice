function fibonacciSeq(num) {
    console.log('This was printed recursively');
    if (num == 0) return [];
    if (num == 1) return [0];
    if (num == 2) return [0, 1];
    const prev = fibonacciSeq(num - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
}

console.log(fibonacciSeq(8));
