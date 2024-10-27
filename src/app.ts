interface Product {
    name: string,
    price: number,
    availability: boolean,
}

const product = {
    name: 'Молоко',
    price: 100,
    availability: true,
};
const alertProduct = (value: Product): string => {
    const availability = value.availability ? 'Так' : 'Ні';
    return `Товар: ${value.name}, Ціна: ${value.price} грн., В наявності: ${availability}.`
}
console.log(alertProduct(product));