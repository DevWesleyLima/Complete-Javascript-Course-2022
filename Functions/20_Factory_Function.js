function createProduct(name, price)
{
    const x = 
    {
        name,
        price,
        discount: 0.1
    }

    return x;
}
console.log(createProduct('MacBook', 2199.49));
console.log(createProduct('iPad', 1199.49));
