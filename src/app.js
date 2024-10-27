var arr = [5, 5, 5, 5, 5];
var calc = function (arr) {
    var sum = arr.reduce(function (a, b) { return a + b; }, 0);
    return sum / arr.length;
};
console.log(calc(arr));
