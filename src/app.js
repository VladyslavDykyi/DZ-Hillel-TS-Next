function deepClone(obj) {
    var copy = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}
var original = { a: 1, b: { c: 2 }, d: [3, 4] };
var copy = deepClone(original);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
