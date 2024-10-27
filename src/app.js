var product = {
    name: 'Молоко',
    price: 100,
    availability: true,
};
var alertProduct = function (value) {
    var availability = value.availability ? 'Так' : 'Ні';
    return "\u0422\u043E\u0432\u0430\u0440: ".concat(value.name, ", \u0426\u0456\u043D\u0430: ").concat(value.price, " \u0433\u0440\u043D., \u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456: ").concat(availability, ".");
};
console.log(alertProduct(product));
