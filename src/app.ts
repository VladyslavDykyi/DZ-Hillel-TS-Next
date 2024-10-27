const arr = [5,5,5,5,5];
const calc = (arr: number[]): number => {
    const sum = arr.reduce((a, b) => a + b,0);
    return sum / arr.length;
}
console.log(calc(arr));